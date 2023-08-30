module.exports = {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            typography: ({ theme }) => ({
                lightMode: {
                    css: {
                        '--tw-prose-body': theme('colors.slate[600]'),
                        '--tw-prose-headings': theme('colors.slate[700]'),
                        '--tw-prose-links': theme('colors.purple[600]'),
                        '--tw-prose-bold': theme('colors.purple[400]'),
                        '--tw-prose-counters': theme('colors.purple[600]'),
                        '--tw-prose-bullets': theme('colors.purple[400]'),
                        '--tw-prose-hr': theme('colors.purple[300]'),
                        '--tw-prose-quotes': theme('colors.purple[900]'),
                        '--tw-prose-quote-borders': theme('colors.purple[300]'),
                        '--tw-prose-captions': theme('colors.purple[700]'),
                        '--tw-prose-code': theme('colors.slate[900]'),
                        '--tw-prose-pre-code': theme('colors.purple[100]'),
                        '--tw-prose-pre-bg': theme('colors.slate[800]'),
                        '--tw-prose-th-borders': theme('colors.purple[300]'),
                        '--tw-prose-td-borders': theme('colors.purple[200]'),
                        '--tw-prose-invert-body': theme('colors.purple[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.purple[300]'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.purple[400]'),
                        '--tw-prose-invert-bullets': theme('colors.purple[600]'),
                        '--tw-prose-invert-hr': theme('colors.purple[700]'),
                        '--tw-prose-invert-quotes': theme('colors.purple[100]'),
                        '--tw-prose-invert-quote-borders': theme('colors.purple[700]'),
                        '--tw-prose-invert-captions': theme('colors.purple[400]'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.purple[300]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.purple[600]'),
                        '--tw-prose-invert-td-borders': theme('colors.purple[700]'),
                    },
                },
                darkMode: {
                    css: {
                        '--tw-prose-body': theme('colors.gray[200]'),
                        '--tw-prose-headings': theme('colors.gray[300]'),
                        '--tw-prose-links': theme('colors.purple[400]'),
                        '--tw-prose-bold': theme('colors.purple[400]'),
                        '--tw-prose-counters': theme('colors.purple[600]'),
                        '--tw-prose-bullets': theme('colors.purple[400]'),
                        '--tw-prose-hr': theme('colors.purple[300]'),
                        '--tw-prose-quotes': theme('colors.purple[900]'),
                        '--tw-prose-quote-borders': theme('colors.purple[300]'),
                        '--tw-prose-captions': theme('colors.purple[700]'),
                        '--tw-prose-code': theme('colors.gray[900]'),
                        '--tw-prose-pre-code': theme('colors.purple[100]'),
                        '--tw-prose-pre-bg': theme('colors.gray[800]'),
                        '--tw-prose-th-borders': theme('colors.purple[300]'),
                        '--tw-prose-td-borders': theme('colors.purple[200]'),
                        '--tw-prose-invert-body': theme('colors.purple[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.purple[300]'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.purple[400]'),
                        '--tw-prose-invert-bullets': theme('colors.purple[600]'),
                        '--tw-prose-invert-hr': theme('colors.purple[700]'),
                        '--tw-prose-invert-quotes': theme('colors.purple[100]'),
                        '--tw-prose-invert-quote-borders': theme('colors.purple[700]'),
                        '--tw-prose-invert-captions': theme('colors.purple[400]'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.purple[300]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.purple[600]'),
                        '--tw-prose-invert-td-borders': theme('colors.purple[700]'),
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}