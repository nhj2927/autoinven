(function ($) {
  'use strict';
  $(document).ready(function () {
    var swalError = (text, callback) =>
      Swal.fire({
        icon: 'error',
        title: 'Fail',
        text: text,
      }).then(callback);
    $('#signout').on('click', function () {
      console.log('clicked');
      $.ajax({
        url: '/api/auth/signout',
        type: 'GET',
        datatype: 'application/json',
        success: (data) => {
          if (data.message == 'success') {
            window.location.href = '/';
          }
        },
        error: function (request, status, error) {
          Swal.fire({
            title: 'Error',
            html: `code: ${request.status}<br>message: 서버 내부 오류가 발생하였습니다. 잠시후 다시 시도해주세요.<br>error: ${error}`,
            icon: 'error',
          });
        },
      });
    });
  });
});
