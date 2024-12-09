$(document).ready(function () {
  $('.searchSm').on('click', '.closeBtn', function () {
    $('.searchSm').removeClass('active');
  });

  // Open search box
  $('.search-icon').click(function () {
    $('.searchSm').addClass('active');
  });

  $(document).keydown(function (e) {
    if (e.key === 'Escape') {
      $('.searchSm').removeClass('active');
    }
  });
});
document.getElementById('phoneLink').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default behavior of the link

  // Show confirmation dialog
  const userConfirmation = confirm('Do you want to call 01751134884?');
  if (userConfirmation) {
    // Update the link to the new number
    this.href = 'tel:01751134884';
    this.textContent = '01751134884';

    // Redirect to the dialer with the new number
    window.location.href = 'tel:01751134884';
  }
});


