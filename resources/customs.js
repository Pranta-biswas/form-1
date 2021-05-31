// get elements form html

var fname = document.getElementById('fname');
var fnameErr = document.getElementById('fnameErr');

var lname = document.getElementById('lname');
var lnameErr = document.getElementById('lnameErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

var cpass = document.getElementById('cpass');
var cpassErr = document.getElementById('cpassErr');

function subm(){
    if(fname.value == ''){
         fname.style.border = "1px solid red";
         fname.focus();
         fnameErr.innerHTML = "Please Enter Your First Name";
         return false;
    }

    if(lname.value == ''){
        lname.style.border = "1px solid red";
        lname.focus();
        lnameErr.innerHTML = "Please Enter Your Last Name";
        return false;
    }

    if(pass.value == ''){
         pass.style.border = "1px solid red";
         pass.focus();
         passErr.innerHTML = "Please Enter Your Password";
         return false;
     }

     if(pass.value.length <= 7){
        pass.style.border = "1px solid red";
        pass.focus();
        passErr.innerHTML = "Password Must Be Contain 8 Characters";
        return false;
    }

    if(cpass.value == ''){
        cpass.style.border = "1px solid red";
        cpass.focus();
        cpassErr.innerHTML = "Please Enter Your Confirm Password";
        return false;
    }

     if(cpass.value != pass.value){
        cpass.style.border = "1px solid red";
        cpass.focus();
        cpassErr.innerHTML = "Password Not Matched With Confirm Password ";
        return false;
     }
   
}

function errRemove(){
    if(fname.value != ''){
        fname.style.border = "none";
        fnameErr.innerHTML = "";
    }

    if(lname.value != ''){
        lname.style.border = "none";
        lnameErr.innerHTML = "";
    }

    if(pass.value != ''){
        pass.style.border = "none";
        passErr.innerHTML = "";
    }

    if(cpass.value != ''){
        cpass.style.border = "none";
        cpassErr.innerHTML = "";
    }
}

fname.addEventListener('blur',errRemove);
lname.addEventListener('blur',errRemove);
pass.addEventListener('blur',errRemove);
cpass.addEventListener('blur',errRemove);

// menu icon

var open = document.getElementById('open');
var close = document.getElementById('close');
var sideNav = document.querySelector('.sideNav');

open.addEventListener('click',function(){
    open.style.display = 'none';
    close.style.display = 'block';
    sideNav.classList.add('sidenav-pos');
});

close.addEventListener('click',function(){
    close.style.display = 'none';
    open.style.display = 'block';
    sideNav.classList.remove('sidenav-pos');
});



