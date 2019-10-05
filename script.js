document.getElementById("contact-form-tooltip").addEventListener("click", function(){
    setTimeout(function () {
        document.getElementById("name").focus()
    },500);
});
function sendData(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var str = "Name="+name+"&Email="+email+"&Message="+msg;
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if (re.test(email)) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://getsimpleform.com/messages?form_api_token=a0771a1c0a7e5d64fe302e48a2b864b2", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(str);
        if (xhttp.responseText === "") {
            document.getElementById("demo").innerHTML = "<p id='success-msg'>I received your message and will review it soon</p>"
            setTimeout(function () {
                var successMsg = document.getElementById("success-msg");
                successMsg.style.display = "none";
            },2000)
        }
    }else {
        var emailBB = document.getElementById("email");
        emailBB.style.borderBottom = "2px solid #ff6d6d";
        emailBB.focus();
        setTimeout(function () {
            emailBB.style.borderBottom = "2px solid #f1f1f1";
        },2000)
    }
}
function openWorks(event){
    event.preventDefault();
    document.getElementById("main-box").style.opacity = 0;
    document.getElementById("line").style.left = 0;
    document.getElementById("works-page").style.left = 0;
    document.title = 'Works | Ali Norouzi';
    setTimeout(function () {
        document.getElementById("line").style.width = 0;
        document.getElementById("back-home").style.opacity = 1;
        document.querySelector("#works-page-list h4").style.opacity = 1;
        document.querySelector("#works-page-list a").style.opacity = 1;
    },300)
}
document.getElementById("back-home").addEventListener("click",function (e) {
    e.preventDefault();
    document.title = 'Ali Norouzi | Front-end web developer';
    document.getElementById("main-box").style.opacity = 1;
    document.getElementById("works-page").style.left = "-100%";
    document.getElementById("line").style.width = "100%";
    document.getElementById("back-home").style.opacity = 0;
    document.querySelector("#works-page-list h4").style.opacity = 0;
    document.querySelector("#works-page-list a").style.opacity = 0;
    setTimeout(function () {
        document.getElementById("line").style.left = "-100%";
    },300)
});
