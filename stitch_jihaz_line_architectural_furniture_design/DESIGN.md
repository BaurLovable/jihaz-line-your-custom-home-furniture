---
name: Kazakhstan Azure
colors:
  surface: '#effcff'
  surface-dim: '#c1dfe7'
  surface-bright: '#effcff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#def8ff'
  surface-container: '#d5f3fb'
  surface-container-high: '#cfedf5'
  surface-container-highest: '#c9e8ef'
  on-surface: '#001f25'
  on-surface-variant: '#3d494c'
  inverse-surface: '#17343a'
  inverse-on-surface: '#d7f6fe'
  outline: '#6d797c'
  outline-variant: '#bcc9cc'
  surface-tint: '#006877'
  primary: '#006877'
  on-primary: '#ffffff'
  primary-container: '#35b8cf'
  on-primary-container: '#00454f'
  inverse-primary: '#5dd6ee'
  secondary: '#745b00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd355'
  on-secondary-container: '#735a00'
  tertiary: '#00687b'
  on-tertiary: '#ffffff'
  tertiary-container: '#52b6cf'
  on-tertiary-container: '#004452'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a4eeff'
  primary-fixed-dim: '#5dd6ee'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#ffe08b'
  secondary-fixed-dim: '#ebc246'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#adecff'
  tertiary-fixed-dim: '#72d4ee'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5d'
  background: '#effcff'
  on-background: '#001f25'
  surface-variant: '#c9e8ef'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  quote:
    fontFamily: Playfair Display
    fontSize: 24px
    lineHeight: '1.5'
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style
The design system embodies an "Architectural Editorial" aesthetic, tailored for a high-end furniture brand. It draws inspiration from modern Kazakh architecture—balancing the expansive, airy qualities of the steppe with precise, structural engineering. 

The visual language is rooted in **Minimalism** with a **High-Contrast Editorial** edge. It prioritizes vast whitespace, razor-sharp edges, and thin hairline strokes to evoke a sense of premium craftsmanship and structural integrity. The emotional response should be one of calm sophistication, clarity, and cultural resonance.

## Colors
The palette is a sophisticated interplay between the vast azure sky and the warmth of the sun. 

- **Primary (#35B8CF):** Used for key brand moments and structural highlights.
- **Secondary Gold (#F2C94C):** Reserved for high-action items and ornamental accents, reflecting traditional solar motifs.
- **Surface & Containers:** We utilize a tiered blue-wash system. The base background is a cool `#F3FBFC`, while functional containers use `#DDF4F7` to provide subtle grouping without heavy borders.
- **Typography:** Avoid pure black. Use `#17343A` for all primary text to maintain a soft, architectural depth.

## Typography
The typography strategy is "Institutional yet Elegant." 

1.  **Serif (Playfair Display):** Used for large displays and headlines. It provides an editorial, luxury-magazine feel that complements architectural photography.
2.  **Sans (Manrope):** Used for all functional body copy. It is clean and modern, ensuring that technical specifications are easy to digest.
3.  **Monospace (JetBrains Mono):** This is the "Technical Accents" layer. Use it for product dimensions, serial numbers, labels, and small UI metadata to emphasize the precision of the furniture designs.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain the "framed" look of a blueprint or architectural drawing.

- **Grid:** 12-column grid with 24px gutters. 
- **Rhythm:** Based on a 4px baseline. All vertical spacing should be multiples of 8px.
- **Sectioning:** Use generous vertical padding (`120px+`) between major sections to allow the furniture pieces "room to breathe." 
- **Alignment:** Content should predominantly be left-aligned to mirror modern editorial layouts, with technical data (Mono font) often right-aligned or justified within small modules.

## Elevation & Depth
In keeping with the architectural theme, this design system avoids traditional fuzzy shadows. Depth is communicated through:

- **Tonal Layering:** Objects are placed on a Primary Container (`#DDF4F7`) to denote focus.
- **Thin Outlines:** Use 0.5px or 1px borders in `#168DA5` (at 20% opacity) for cards and inputs.
- **Hard Offsets:** If a shadow is required for a secondary button or a hover state, use a "Hard Shadow" (0px blur, 4px offset) in the Secondary Container color to mimic a physical shadow on a floor plan.
- **Glassmorphism:** Use subtle backdrop blurs (10px) on navigation bars to maintain the "Azure" airy feel without obscuring the content.

## Shapes
The shape language is **Sharp**. 
Architectural integrity is represented by 90-degree angles. Use `0px` radius for almost all components (Buttons, Inputs, Cards). 

Where a "Soft" touch is absolutely necessary for ergonomic mobile interaction, a maximum radius of `4px` may be applied to small UI controls like checkboxes or radio buttons, but never to primary structural containers.

## Components
- **Buttons:** Primary buttons use a Secondary Gold (`#F2C94C`) fill with sharp corners. Label text is `#17343A` in JetBrains Mono. Secondary buttons are "Ghost" style with a 1px turquoise border.
- **Cards:** Cards should have no shadow. Use a white (`#FFFFFF`) background with a 1px hairline border or a subtle fill change to Primary Container.
- **Inputs:** Underline-style inputs are preferred for a "drafting" look, using the Primary color for the active underline state.
- **Chips/Labels:** Use JetBrains Mono exclusively. These should look like technical annotations on a drawing—compact, all-caps, and potentially rotated 90 degrees in specific decorative contexts.
- **Product Lists:** Display products in a rigid grid. Images should be "contained" (not full-bleed) with generous margins to emphasize their status as curated objects.