(function ($) {
    "use strict";
    $(document).ready(function () {
        var name_check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        var pw_check = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        var phone_check = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        var swalError = (text, callback) => Swal.fire({
            icon: 'error',
            title: 'Fail',
            text: text
        }).then(callback);
        $("#edit_pw_btn").click(function () {
            var current_password = $('#current_pw').val();
            var new_password = $('#new_pw').val();
            var new_password_check = $('#new_pw_check').val();
            var data = {
                current_password,
                new_password
            }
            if (!current_password)
                swalError('현재 비밀번호를 입력해주세요.');
            else if (!new_password)
                swalError('변경할 비밀번호를 입력해주세요.');
            else if (!new_password_check)
                swalError('변경할 비밀번호 확인을 입력해주세요.');
            else if (new_password == new_password_check && pw_check.test(new_password) == true) {
                $.ajax({
                    url: 'http://192.168.0.18:5000/api/myinfo/password',
                    type: 'put',
                    accepts: 'application/json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (data) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Myinfo',
                            text: 'Edit myinfo success'
                        }).then(() => {
                            location.href = "/myinfo";
                        })
                    },
                    error: function (request, status, error) {
                        if (request.status == 401) {
                            Swal.fire({
                                title: 'Error',
                                html: `code: ${request.status}<br>message: 비밀번호를 다시 확인해주세요.<br>error: ${error}`,
                                icon: 'error'
                            });
                        }
                        else {
                            swalError('서버 내부 오류가 발생하였습니다.');
                            console.log(request, status, error);
                        }
                    }
                })
            }
            else if (new_password != new_password_check) {
                swalError('비밀번호 확인이 일치하지 않습니다.')
            }
            else {
                swalError('올바른 비밀번호가 아닙니다.')
            }
        });
        $('#change_myinfo').click(function () {
            var name = $('#name').val()
            var phone = $('#phone').val()
            phone = phone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
            var data = {
                name,
                phone
            }
            console.log(phone);
            if (name_check.test(name) == false)
                swalError('올바른 이름이 아닙니다.');
            else if (phone_check.test(phone) == false)
                swalError('올바른 전화번호가 아닙니다.');
            else {
                $.ajax({
                    url: 'http://192.168.0.18:5000/api/myinfo',
                    type: 'PUT',
                    accepts: 'application/json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (data) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Edit Myinfo',
                            text: 'success',
                        })
                    },
                    error: function (request, status, error) {
                        swalError('서버 내부 오류가 발생하였습니다.');
                    }
                })
            }
        });
    })
})(jQuery);