function send(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var comfirm= document.getElementById("comfirm").value;
    var phone= document.getElementById("phone").value;
    var address= document.getElementById("address").value;
    if(name=="" || email =="" ||password =="" || comfirm ==""||phone==""||address=="")
    {
        alert("vui lòng điền lại");
    }
    else{
        if(password != comfirm)
        {
            alert("vui lòng xác nhận lại mật khẩu");
        }
        if(isNaN(phone)){
            alert("vui lòng nhập lại số điện thoại");
        }
    }
}