(function() {
  var params = new URLSearchParams(window.location.hash.substring(1));
  var key = (params.get('key') || '').trim();
  var isValid = /^FXCK-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/i.test(key);

  if (isValid) {
    var safe = key.replace(/[<>"'&]/g, '');
    document.getElementById('key-display').textContent = safe;
    document.getElementById('deeplink').href =
      'https://fauxclock.canonspike.com/activate#key=' + encodeURIComponent(safe);
    document.getElementById('with-key').style.display = 'block';
  } else {
    document.getElementById('no-key').style.display = 'block';
  }
})();
