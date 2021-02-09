(function () {
  var input = document.getElementById('input');
  var output = document.getElementById('generated');

  input.oninput = window.onload = function doJa() {
    output.innerHTML =
      'Ha' +
      (/^\s*[a-z\s]+\s*$/i.test(input.value)
        ? input.value
            .trim()
            .split(/\s+/)
            .map(function (w) {
              return (w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                .replace(/^[YI]/, 'J')
                .replace(/^[AEIOU]/, function (l) {
                  return 'J' + l.toLowerCase();
                })
                .replace(/[yi][aeiou]/g, function (iv) {
                  return iv.charAt(0) + 'j' + iv.charAt(1);
                });
            })
            .join('')
        : '...') +
      'Haja';
  };
})();
