(function ($) {
    "use strict"; // Start of use strict
    $(document).ready(function () {
        var pw_check = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        var email_check = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        var name_check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        var authedEmails = [''];
        var authCode = null;
        var authFlag = false;

        var swalError = (text, callback) => Swal.fire({
            icon: 'error',
            title: 'Fail',
            text: text
        }).then(callback);

        $('#email').on('input', () => {
            if (!authedEmails.includes(($('#email').val()))) {
                authCode = null;
                authFlag = false;
                $('#li_auth').show();
            } else {
                authFlag = true;
                $('#li_auth').hide();
            }
        });

        $('#sendAuthCode').click(function () {
            var email = $('#email').val();
            var data = { email }
            console.log(email);
            if (email_check.test(email) == false)
                swalError('형식에 맞는 이메일을 입력해주세요.');
            else if (email != '') {
                $.ajax({
                    url: 'http://192.168.0.18:5000/api/auth/signup/email',
                    type: 'POST',
                    accepts: 'application/json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (rcvData) {
                        if (rcvData.result == false)
                            swalError('잠시후 다시 시도해주세요.');
                        else {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: rcvData.auth_code,
                            }).then(function () {
                                authCode = rcvData.auth_code;
                                authedEmails.push($('#email').val());
                            });
                        }
                    },
                    error: function (request, status, error) {
                        if (status == 401) {
                            Swal.fire({
                                title: 'Error',
                                html: `code: ${request.status}<br>message: 이메일을 다시 확인해주세요.<br>error: ${error}`,
                                icon: 'error'
                            });
                        }
                        else if (status == 409) {
                            Swal.fire({
                                title: 'Error',
                                html: `code: ${request.status}<br>message: 이미 가입된 이메일 주소입니다.<br>error: ${error}`,
                                icon: 'error'
                            });
                        }
                        else {
                            Swal.fire({
                                title: 'Error',
                                html: `code: ${request.status}<br>message: 서버 내부 오류가 발생하였습니다. 잠시후 다시 시도해주세요.<br>error: ${error}`,
                                icon: 'error'
                            });
                        }
                    }
                });
            }
            else {
                swalError("이메일을 입력해주세요.");
            }
        });
        $('#codecheck').click(function () {
            var vCode = $("#authcode").val();
            if (email != '') {
                if (vCode == authCode) {
                    authFlag = true;
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: '인증 되었습니다.'
                    }).then(() => {
                        $('#li_auth').hide();
                        $('#authCode').val('');
                        $('#sendAuthCode').attr('disabled', true);
                    });
                } else swalError('인증번호를 다시 확인해주세요.');
            }
            else swalError('인증번호를 입력해주세요.');
        });
        //send sign up data to server
        $("#signup_button").click(function () {
            var email = $("#email").val();
            var password = $("#pw").val();
            var pwcheck = $("#pwcheck").val();
            var name = $("#name").val();
            var phone = $("#tel").val();
            var data = {
                email,
                password,
                name,
                phone
            }
            console.log(name);
            if (authFlag == false) {
                swalError("이메일 인증을 완료해주세요.");
            }
            else if (!email) {
                swalError('이메일을 입력해주세요.');
            }
            else if (!name)
                swalError('이름을 입력해주세요.');
            else if (name_check.test(name) == false) {
                swalError('정확한 이름을 입력해주세요.');
            }
            else if (!password)
                swalError('비밀번호를 입력해주세요.');
            else if ((pw_check.test(password)) == false)
                swalError('최소8자리 영문 대소문자 및 숫자를 조합한 비밀번호를 입력해주세요.');
            else if (password != pwcheck)
                swalError('비밀번호를 다시 확인해주세요.');
            else {
                $.ajax({
                    url: 'http://192.168.0.18:5000/api/auth/signup',
                    type: 'POST',
                    accepts: 'application/json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (data) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Sign up',
                            text: 'Sign up success',
                        }).then(() => {
                            location.href = "/";
                        })
                    },
                    error: function (request, status, error) {
                        if (status == 401) {
                            Swal.fire({
                                title: 'Error',
                                html: `code: ${request.status}<br>message: 이메일, 비밀번호를 다시 확인해주세요.<br>error: ${error}`,
                                icon: 'error'
                            });
                        }
                        else {
                            console.log(email);
                            Swal.fire({
                                title: 'Error',
                                html: `code: ${request.status}<br>message: 서버 내부 오류가 발생하였습니다. 잠시후 다시 시도해주세요.<br>error: ${error}`,
                                icon: 'error'
                            });
                        }
                    }
                })
            }
        })
    })
})(jQuery);
