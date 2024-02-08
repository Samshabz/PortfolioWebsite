document.addEventListener('DOMContentLoaded', function() {
  var copyIcons = document.querySelectorAll('.copy-icon');

  copyIcons.forEach(function(icon) {
    icon.addEventListener('click', function(event) {
      var text = event.target.getAttribute('data-clipboard-text');
      var elem = document.createElement('textarea');
      document.body.appendChild(elem);
      elem.value = text;
      elem.select();
      document.execCommand('copy');
      document.body.removeChild(elem);

      // Show copied message at the top
      var copiedMsg = document.querySelector('.copied-message');
      if (!copiedMsg) {
        copiedMsg = document.createElement('div');
        copiedMsg.textContent = 'Link copied to clipboard';
        copiedMsg.className = 'copied-message';
        document.body.appendChild(copiedMsg);
      }
      copiedMsg.style.display = 'block';
      // Remove the copied message element after 2 seconds
      setTimeout(function() {
        copiedMsg.style.display = 'none';
      }, 2000);
    });
  });
});
