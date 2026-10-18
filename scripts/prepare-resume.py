"""Public resume update. Requires PyMuPDF. Inputs stay outside public assets.
Invoke through update-resume.ts so contact and role details come from portfolio.ts.
"""
import argparse, json
from pathlib import Path
import pymupdf as fitz

parser = argparse.ArgumentParser()
parser.add_argument('source'); parser.add_argument('--content', required=True); parser.add_argument('--output', required=True)
args = parser.parse_args()
content = json.loads(Path(args.content).read_text())
source, output = Path(args.source).resolve(), Path(args.output).resolve()
assert source != output, 'Keep the source PDF unchanged; use a separate input copy.'
document = fitz.open(source)
assert len(document) == 1, 'This preparation layout targets the supplied one-page resume.'
page = document[0]
preview = Path('tmp/resume-update'); preview.mkdir(parents=True, exist_ok=True)

def existing(rect):
    return ' '.join(page.get_textbox(fitz.Rect(rect)).split()).replace('\ufffd', '-').replace('\u2014', '-').replace('\u2013', '-')

summary_box = fitz.Rect(27, 175, 564, 242)
summary = existing(summary_box)
by_id = {role['id']: role for role in content['experience']}
upwork, accenture = by_id['upwork'], by_id['accenture']
roles = [upwork, accenture]
summary = summary.replace('at Microsoft.', f"through {accenture['company']} and {upwork['company']}.")
support = existing((41,446,561,548))
support = support.replace('suite Exchange', 'suite. Exchange').replace('conditional access Intune', 'conditional access. Intune').replace('sync issues Explained', 'sync issues. Explained')
freelance = existing((41,575,560,604))
freelance_title = existing((29,559,443,575))
freelance_dates = existing((445,559,560,575))
assert 'Top Rated' in freelance and 'Exchange Online' in support
email_boxes = []
for block in page.get_text('dict')['blocks']:
    for line in block.get('lines', []):
        for span in line['spans']:
            compact = ''.join(span['text'].split())
            if '@' in span['text'] or '+63' in compact or '9276002128' in compact:
                box = fitz.Rect(span['bbox'])
                page.add_redact_annot(box, fill=(1,1,1))
                if '@' in span['text']: email_boxes.append(box)
page.add_redact_annot(summary_box, fill=(1,1,1))
page.add_redact_annot(fitz.Rect(27, 429, 563, 607), fill=(1,1,1))
page.apply_redactions(images=0, graphics=0)
for box in email_boxes:
    page.insert_text((box.x0,box.y1-2), content['email'], fontsize=9, fontname='helv', color=(.1,.1,.1))
    page.insert_link({'kind':fitz.LINK_URI,'from':fitz.Rect(box.x0,box.y0,box.x0+fitz.get_text_length(content['email'],fontsize=9),box.y1),'uri':'mailto:'+content['email']})
assert email_boxes, 'No email text located in the supplied resume.'
website = content['website'].rstrip('/')
assert website.startswith('https://'), 'The public website must use HTTPS.'
# The right half of the email row is empty in the supplied one-page layout.
website_box = fitz.Rect(250, 105, 564, 121)
page.add_redact_annot(website_box, fill=(1,1,1))
page.apply_redactions(images=0, graphics=0)
page.insert_text((310,117), website, fontsize=9, fontname='helv', color=(.1,.1,.1))
page.insert_link({'kind':fitz.LINK_URI, 'from':fitz.Rect(310,105,310+fitz.get_text_length(website,fontsize=9),121), 'uri':website})
if content.get('linkedIn'):
    linkedin_box = fitz.Rect(49, 123, 564, 140)
    page.add_redact_annot(linkedin_box, fill=(1,1,1))
    page.apply_redactions(images=0, graphics=0)
    linkedin_label = content['linkedIn'].removeprefix('https://').removeprefix('www.').rstrip('/')
    page.insert_text((50,136), linkedin_label, fontsize=9, fontname='helv', color=(.1,.1,.1))
    page.insert_link({'kind':fitz.LINK_URI, 'from':fitz.Rect(50,123,50+fitz.get_text_length(linkedin_label,fontsize=9),140), 'uri':content['linkedIn']})
assert page.insert_textbox(summary_box, summary, fontname='helv', fontsize=10.3, lineheight=1.13, color=(.08,.08,.08)) >= 0, 'Summary overflow'

def text_box(rect, text, size=9.7, bold=False, align=0):
    # Core PDF fonts include all required glyphs; the source's subset fonts omit some new letters.
    remaining=page.insert_textbox(fitz.Rect(rect), text, fontname='hebo' if bold else 'helv', fontsize=size, lineheight=1.15, align=align, color=(.08,.08,.08))
    assert remaining >= 0, f'Resume text overflow: {text[:55]}'

text_box((29,431,352,447), f"{upwork['role']} | {upwork['company']} ({upwork['employment']})", bold=True)
text_box((354,431,560,447), upwork['dates'], size=9.2, align=2)
# Existing supplied PDF duties stay with Upwork; role lookup never depends on display order.
text_box((30,449,561,530), support, size=10)
text_box((29,532,342,548), f"{accenture['role']} | {accenture['company']}", bold=True)
text_box((346,532,560,548), accenture['dates'], size=9.2, align=2)
text_box((30,549,561,564), accenture['location'], size=9.2)
text_box((29,566,443,582), freelance_title, size=9.6, bold=True)
text_box((445,566,560,582), freelance_dates, size=9.6, align=2)
text_box((30,583,561,608), freelance, size=9.2)

for link in list(page.get_links()):
    uri=link.get('uri','')
    if uri.startswith('tel:') or (uri.startswith('mailto:') and uri != 'mailto:'+content['email']) or ('linkedin.com' in uri and uri != content.get('linkedIn')): page.delete_link(link)
document.set_metadata({})
document.del_xml_metadata()
document.save(output, garbage=4, deflate=True)
check=fitz.open(output); text=' '.join(p.get_text() for p in check)
assert content['email'] in text and 'gmail.com' not in text
assert website in text and any(link.get('uri') == website for link in check[0].get_links())
assert '+63' not in text and '9276002128' not in text and 'Sep 2021' not in text and 'May 2025' not in text
assert all(role['company'] in text and role['dates'] in text for role in roles)
assert upwork['role'] in text and accenture['location'] in text
assert text.index(upwork['role']+' | '+upwork['company']) < text.index(accenture['role']+' | '+accenture['company'])
assert '\x00' not in text, 'A newly inserted glyph is missing.'
for index,p in enumerate(check): p.get_pixmap(matrix=fitz.Matrix(1.6,1.6)).save(preview/f'page-{index+1}.png')
print('Resume contact and support roles updated; obsolete text removed and all pages rendered.')
