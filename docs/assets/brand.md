# JA branding provenance and editing

The user supplied `JA enterprise technology logo set.zip`. Source `3.png` is the white/cyan dark-theme mark; `2.png` is the navy/cyan light-theme mark. Both originals have opaque checkerboard pixels rather than transparency. Originals in Downloads are unchanged and are not deployed.

The built-in image-generation tool was used in edit mode for background extraction. The selected results were cropped and resized with Sharp into transparent, metadata-free 640 × 400 PNGs:

- `public/images/brand/ja-dark.png`
- `public/images/brand/ja-light.png`

These assets are static local files, not external image-service URLs. `brand` in `content/portfolio.ts` holds the paths and accessible label. Header, footer and hero use the same two files. CSS chooses the theme variant; no client-only conditional markup is needed. Keep both versions fitted within the same 8:5 canvas when replacing them.

The dark mark is reused in eight generated Open Graph images. Square navy-backed browser icons are supplied as 16/32-pixel PNGs, an ICO, and a 180-pixel Apple touch icon. The existing `public/icon.svg` URL is retained as an SVG wrapper containing the supplied raster mark, replacing the old text monogram. The logo is not represented as newly drawn vector artwork.

## Selected edit prompts

Dark source extraction:

> Use case: background-extraction. Edit this supplied JA logo only. Remove the baked-in gray checkerboard background completely, including inside the A counter and all negative spaces, leaving real transparent alpha. Preserve the exact white J and A silhouettes, their proportions, placement, subtle gray edge shadow and single cyan circular circuit accent and short line. Do not redesign, do not add any lettering, do not change the shapes. Clean sharp logo cutout, centered with small even transparent margins. No checkerboard pixels, no surrounding glow or opaque background. This is the dark-theme website logo.

Selected dark refinement:

> Clean this existing transparent logo cutout. Remove stray white fragments and ragged wisps along the outside of the J, left sloping edge of the A, and inside the triangular A counter. Retain only the smooth white J and A, tiny gray solid edge shadow and cyan circuit dot/line. Preserve exact design and geometry. All negative space completely transparent. Do NOT add ambient shadows, halo or glow. Flat clean geometric contours. No background.

Light extraction:

> Use case: background-extraction. Edit supplied JA logo only. Remove baked-in pale checkerboard background completely, including inside the A counter, J curve and circular circuit holes. Real transparent alpha. Preserve exact navy J and A letter silhouettes, proportions, spacing and both cyan circuit strokes and outlined circular nodes. No redesign, no added text, no shape changes, no new shadows. Clean sharp cutout, centered small even transparent margins. No checkerboard pixels, glow, or opaque background. This is the light-theme website logo.

An alternate dark extraction that added a glow was rejected and is not deployed. Final assets were inspected on both website backgrounds and at header/hero/icon sizes. Background extraction is a raster cleanup and does not provide an editable vector master.
