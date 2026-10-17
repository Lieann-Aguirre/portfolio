"""One-time public resume preparation. Requires PyMuPDF; never copies the source to public/."""
import sys
from pathlib import Path
import fitz

source = Path(sys.argv[1])
output = Path('public/julie-ann-aguirre-resume.pdf')
document = fitz.open(source)
redactions = 0
for page in document:
    for line in page.get_text('dict')['blocks']:
        for text_line in line.get('lines', []):
            for span in text_line['spans']:
                text = span['text']
                compact = ''.join(text.split())
                if '+63' in compact or '9276002128' in compact:
                    # The email and phone share a span in the source. Remove that span,
                    # then restore only the approved email at the same baseline.
                    box = fitz.Rect(span['bbox'])
                    page.add_redact_annot(box, fill=(1, 1, 1))
                    page.apply_redactions()
                    if '@' in text:
                        page.insert_text((box.x0, box.y1 - 2), 'lieannaguirre@gmail.com', fontsize=9, color=(0.1, 0.1, 0.1))
                    redactions += 1
document.set_metadata({})
for page in document:
    for link in page.get_links():
        if link.get('uri', '').startswith('tel:'):
            page.delete_link(link)
assert redactions, 'Phone text not located. Do not publish an unreviewed source.'
document.save(output, garbage=4, deflate=True)
check = fitz.open(output)
all_text = ''.join(''.join(p.get_text().split()) for p in check)
assert '9276002128' not in all_text and '+63' not in all_text
preview = Path('tmp/resume-preview')
preview.mkdir(parents=True, exist_ok=True)
for index, page in enumerate(check):
    page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5)).save(preview / f'page-{index+1}.png')
print(f'Public-safe resume saved. Redacted {redactions} phone span(s); rendered {len(check)} page(s).')
