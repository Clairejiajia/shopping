$(function () {
  $('#myList a:last-child').tab('show')
})
$('#removeModal').on('show.bs.modal', function (event) {
  var btn = $(event.relatedTarget);
  var title = btn.data('title');

  var modal = $(this);
  modal.find('.modal-title').text('確認刪除' + title);
})
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
$("#twzipcode").twzipcode({
  "zipcodeIntoDistrict": true,
  "css": ["city form-control", "town form-control"],
  "countyName": "city", // 指定城市 select name
  "districtName": "town" // 指定地區 select name
});
$('.creaditcard').keyup(function (e) {
  if ($(this).val().length == $(this).attr('maxlength'))
    $(this).next(':input').focus();
}); 
