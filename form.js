
var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
var main_ele = document.getElementsByClassName("container"); 
var par_ele = document.getElementsByClassName("box");

function login(){
    x.style.left = "27px";
    y.style.right = "-350px";
    z.style.left = "0px";
}

function register(){
    x.style.left = "-350px";
    y.style.right = "25px";
    z.style.left = "150px";
}

function myLogPassword(){
    var a = document.getElementById("logPassword");
    var b = document.getElementById("eye");
    var c = document.getElementById("eye-slash");

    if(a.type === "password"){
        a.type = "text";
        b.style.opacity = "1";
        c.style.opacity = "0";
    } else {
        a.type = "password";
        b.style.opacity = "0";
        c.style.opacity = "1";
    }
}

function myRegPassword(){
    var d = document.getElementById("regPassword");
    var b = document.getElementById("eye-2");
    var c = document.getElementById("eye-slash-2");

    if(d.type === "password"){
        d.type = "text";
        b.style.opacity = "1";
        c.style.opacity = "0";
    } else {
        d.type = "password";
        b.style.opacity = "0";
        c.style.opacity = "1";
    }
}

setTimeout(() => {
    for (var i = 0; i < par_ele.length; i++) {
        par_ele[i].style.display = "block";
    }
}, 3000);



