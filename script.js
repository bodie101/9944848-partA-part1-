//Set varibales based on HTML element id's
let un = document.querySelector('#un')
let pw1 = document.querySelector('#pw1')
let pw2 = document.querySelector('#pw2')
let submit = document.querySelector('#submit')

let unresult = document.querySelector('unresult')
let pw1result = document.querySelector('pw1result')
let pw2result = document.querySelector('pw2result')

//Function when form is sumitted
let submitForm = () => {
    //fnresult.innerHTML = fn.value
    //lnresult.innerHTML = ln.value
    //pwresult.innerHTML = pw.value 
if (fn.value.length < 7)
{
    alert("user name needs to be 8 characters")
}
else {

    console.log(fn.value)

    }

if (pw1.value == pw2.value)
    {
        console.log(pw1.value)
        alert("Username and Password has been sent")
    }
else {

    alert("Passwords need to be the same")
}        
  
    
}

    

//Event Listener
submit.addEventListener('click', (e) => { submitForm(); e.preventDefault() }) 






