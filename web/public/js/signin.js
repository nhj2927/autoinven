(function ($) {
  'use strict'; // Start of use strict
  $(document).ready(function () {
    var email_check =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    //send sign up data to server
    $('#signin_button')
      .off('click')
      .on('click', function () {
        var email = $('#email').val();
        var password = $('#password').val();
        console.log(email, password);

        var swalError = (text) =>
          Swal.fire({
            icon: 'error',
            title: 'Fail',
            text: text,
          });

        if (!email) swalError('이메일을 입력하세요.');
        else if (!password) swalError('비밀번호를 입력하세요.');
        else if (email_check.test(email) == false)
          swalError('회원정보 입력 형식을 확인하세요.');
        else {
          var data = {
            email,
            password,
          };
          console.log(locals.role);
          $.ajax({
            url: '/api/auth/signin',
            type: 'POST',
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
              console.log(data);
              if (data.message == 'success') window.location.href = '/';
              else swalError('Undefined Error');
            },
            error: function (request, status, error) {
              Swal.fire({
                title: 'Error',
                html: `code: ${request.status}<br>message: ${request.responseText}<br>error: ${error}`,
                icon: 'error',
              });
            },
          });
        }
      });
  });
})(jQuery);
