function testingMyFunction(){
    // alert("you will be login");
    var oUser = document.getElementById("user");
    var oPassword = document.getElementById("password");
    var sUserName = oUser.value;
    var sPassword = oPassword.value;

    if(sUserName === "Deepak" && sPassword === "Deepak2020"){
        document.write("login successfull")
    }else{
        var oLabel = document.getElementById("errorMsg");
        oLabel.innerText = "Eror in login";
        
    }
}

