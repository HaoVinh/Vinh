const OnDangNhap = function () {
    try {
        var FormDangNhap = document.forms["FormDangNhap"];
        console.log(FormDangNhap);
        var userName = FormDangNhap["username"].value;
        var passWord = FormDangNhap["password"].value;
        // alert(userName);
        // alert(passWord);
        if(userName!="admin" || passWord != "123456")
        {
            throw "Tài khoản hoặc mật khẩu vừa nhập không đúng";
        }
        else {
            throw "Chúc mừng bạn đã đăng nhập thành công!!";
        }
        return true;
    } catch (error) {
        alert(error);
        return false;
    }





}