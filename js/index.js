let userInp = document.getElementById('userName')
let phone = document.getElementById('phone')
let lab1 = document.getElementById('lab1')
let lab3 = document.getElementById('lab3')

userInp.addEventListener('click', () => {
    lab1.style.top = "30px"
    lab3.style.top = "50px"
})

phone.addEventListener('click', () => {
    lab1.style.top = "50px"
    lab3.style.top = "30px"
})

function inp() {
    let userInpValue = userInp.value
    if(userInpValue != ""){
        lab1.style.top = "30px"
    }else {
        lab1.style.top = "50px"
    }
}

userInp.addEventListener('input', inp); 

inp()