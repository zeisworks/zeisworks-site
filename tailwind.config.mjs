import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Apple-inspired palette (gallery white + one rationed blue) ──
        // Achromatic neutrals, a single brand-red accent, near-black "dark stage"
        // for heroes/dark sections. Legacy token names (rust*, orange*, navy*,
        // forest*, zw-*) are kept but REPOINTED so existing utility classes
        // restyle sitewide without per-file edits.
        cream: '#F7F6F3',           // fog — page canvas
        'cream-dark': '#E8E8ED',    // silver mist — borders/dividers
        ink: '#1D1D1F',             // near-black primary text
        'ink-mid': '#5D5D63',       // graphite — secondary
        'ink-light': '#86868B',     // muted captions/meta

        // Azure — the single rationed accent (CTA + links).
        rust: '#C83A25',
        'rust-bright': '#A93409',
        'rust-soft': '#F0A184',     // light azure for on-dark accents
        orange: '#C83A25',
        'orange-bright': '#A93409',

        // Near-black "dark stage" for heroes / dark sections / footers.
        forest: '#1D1D1F',
        'forest-deep': '#141416',
        'forest-darkest': '#000000',
        navy: '#C2410C',            // cobalt — inline link blue
        'navy-deep': '#1D1D1F',     // dark stage bg

        // Legacy homepage (zw-*) tokens, repointed.
        'zw-cream': '#F7F6F3',
        'zw-ink': '#1D1D1F',
        'zw-forest': '#1D1D1F',
        'zw-teal': '#C83A25',
        'zw-rust': '#A93409',
        'zw-card': '#FFFFFF',
        'zw-border': 'rgba(0,0,0,0.10)',
        'zw-muted': '#5D5D63',
      },
      fontFamily: {
        // One type system sitewide: Space Grotesk display, DM Sans body,
        // DM Mono accents. `inter` + `mono` repointed off Inter/JetBrains.
        serif: ['Space Grotesk', 'DM Sans', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        inter: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      typography: ({ theme }) => ({
        zeisworks: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-lead': theme('colors.ink-mid'),
            '--tw-prose-links': theme('colors.navy'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.ink-mid'),
            '--tw-prose-bullets': theme('colors.ink-mid'),
            '--tw-prose-hr': theme('colors.cream-dark'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.orange'),
            '--tw-prose-captions': theme('colors.ink-mid'),
            '--tw-prose-code': theme('colors.forest'),
            '--tw-prose-pre-code': theme('colors.cream'),
            '--tw-prose-pre-bg': theme('colors.forest'),
            '--tw-prose-th-borders': theme('colors.cream-dark'),
            '--tw-prose-td-borders': theme('colors.cream-dark'),
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '1.0625rem',
            lineHeight: '1.75',
            maxWidth: 'none',
            h1: {
              fontFamily: '"Space Grotesk", "DM Sans", system-ui, sans-serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: '"Space Grotesk", "DM Sans", system-ui, sans-serif',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              fontFamily: '"Space Grotesk", "DM Sans", system-ui, sans-serif',
              fontWeight: '600',
            },
            a: {
              textDecorationColor: theme('colors.navy'),
              '&:hover': {
                color: theme('colors.navy'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
