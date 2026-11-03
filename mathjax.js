window.MathJax = {
  output: {
    fontExtensions: [
      'mathjax-euler'
    ]
  },

  tex: {
    inlineMath: [
      ['\\(', '\\)'],
      ['$', '$']
    ],

    displayMath: [
      ['\\[', '\\]'],
      ['$$', '$$']
    ],

    macros: {
      EuScript: ['\\mathscr{#1}', 1]
    }
  },

  options: {
    skipHtmlTags: [
      'script',
      'noscript',
      'style',
      'textarea',
      'pre',
      'code'
    ]
  }
};

const mathJaxScript = document.createElement('script');

mathJaxScript.src =
  'https://cdn.jsdelivr.net/npm/mathjax@4.1.3/tex-mml-chtml.js';

mathJaxScript.async = true;

document.head.appendChild(mathJaxScript);
