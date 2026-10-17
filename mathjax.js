window.MathJax = {
  tex: {
    inlineMath: [
      ['\\(', '\\)'],
      ['$', '$']
    ],
    displayMath: [
      ['\\[', '\\]'],
      ['$$', '$$']
    ]
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
  'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js';

mathJaxScript.async = true;

document.head.appendChild(mathJaxScript);
