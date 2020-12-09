(function () {
  var input = document.getElementById('input');
  var output = document.getElementById('generated');

  function toJa(name) {
    return (
      'Ha' +
      name
        .split(/\s+/)
        .map(function (w) {
          return (w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .replace(/^[YI]/, 'J')
            .replace(/^[aeiou]/i, function (l) {
              return 'J' + l.toLowerCase();
            })
            .replace(/[yi][aeiou]/g, function (iv) {
              return iv.charAt(0) + 'j' + iv.charAt(1);
            });
        })
        .join('') +
      'Haja'
    );
  }

  input.oninput = window.onload = function doJa() {
    var inputVal = input.value.trim();
    output.innerHTML = toJa(/^[A-Za-z\s]+$/.test(inputVal) ? inputVal : '...');
  };
})();
