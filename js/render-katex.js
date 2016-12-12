;(function (katex) {
  var inlineElts = document.getElementsByClassName('mathquill-embedded-latex');
  Array.prototype.forEach.call(inlineElts, function (elt) {
    katex.render(elt.textContent, elt);
  });

  var displayElts = document.getElementsByClassName('display-latex');
  Array.prototype.forEach.call(displayElts, function (elt) {
    katex.render(elt.textContent, elt, {displayMode: true});
  });
})(katex);

