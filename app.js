var main2 = document.getElementById("main2")
var main2a = document.getElementById("main2-a")
var main2b = document.getElementById("main2-b")
var main2c = document.getElementById("main2-c")
var admin = document.getElementById("admin")
var admin_b = document.getElementById("admin-b")

console.log(main2, main2a, main2b, main2c)
// main2-a div elements
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var fatherName = document.getElementById("fatherName")
var email = document.getElementById("email")
var gender = document.getElementById("gender")

// main2-b div elements
var phone = document.getElementById("phone")
var linkdin = document.getElementById("linkdin")
var qualification = document.getElementById("qualification")
var skill = document.getElementById("skill")
var city = document.getElementById("city")

function step1() {
    // alert("hello")
    main2b.style.display = "none"
    main2c.style.display = "none"
    main2a.style.display = "block"


}
function step2() {
    main2b.style.display = "block"

    main2a.style.display = "none"
    main2c.style.display = "none"
    // alert("hello")

}
let mainArr = []

function sendToLocal(name, father, gmail, gen, cit) {
    let subArr1 = []

    subArr1.push(name, father, gmail, gen, cit)
    mainArr.push(subArr1)
    console.log(mainArr)
    //     let subArr1=[name,father,gmail,gen,cit]
    // mainArr.push(subArr1)
    // localStorage.setItem(data,JSON.stringify(mainArr))
}
// sendToLocal("muza","sda","das","das","erqwe")
// sendToLocal("muza","sda","das","das","erqwe")
// sendToLocal("muza","sda","das","das","erqwe")

// swal({
//     title: "Invalid",
//     icon: "warning",
//     button: "ok!",
//   });
//   REGEX
let nameReg = /(^[a-zA-Z]+$)/
let ageReg = /^(\+?\d{1,3}|\d{1,4})$/
let numReg = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}/g
let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

function submit() {
    if ((nameReg).test(firstName.value) == true && (nameReg).test(lastName.value) == true
        && (nameReg).test(fatherName.value) == true && (emailReg).test(email.value) == true
        && (numReg).test(phone.value) == true && (nameReg).test(city.options[city.selectedIndex].text) == true
        && (nameReg).test(gender.options[gender.selectedIndex].text) == true) {
        sendToLocal(firstName.value, fatherName.value, email.value, gender.options[gender.selectedIndex].text, city.options[city.selectedIndex].text)
        localStorage.setItem("data" + Math.random(), JSON.stringify(mainArr))

        //    {
        //     let subArr1=[firstName.value,fatherName.value,email.value,gender.options[gender.selectedIndex].text,city.options[city.selectedIndex].text]
        // mainArr.push(subArr1)
        // localStorage.setItem(data,JSON.stringify(mainArr))
        //    }


        swal({
            icon: "success",
            title: "registration successfull",
            button: "ok"
        }).then(function reload() {
            location.reload()
        }
        )

    }
    console.log((nameReg).test(firstName.value))
    if (!phone.value.match(numReg)) {

        swal({
            title: "Invalid Phone Number ",
            icon: "warning",
            button: "ok!",
        });

    }
    if (!(city.options[city.selectedIndex].text).match(nameReg)) {

        swal({
            title: "Select Your City ",
            icon: "warning",
            button: "ok!",
        }
       
        );
        return false
    }
    if (!gender.options[gender.selectedIndex].text.match(nameReg)) {

        swal({
            title: "Select Gender",
            icon: "warning",
            button: "ok!",
        });

    }
    if (!email.value.match(emailReg)) {

        swal({
            title: "Invalid Email ",
            icon: "warning",
            button: "ok!",
        });

    }
    if (!fatherName.value.match(nameReg)) {

        swal({
            title: "Invalid Father Name",
            icon: "warning",
            button: "ok!",
        });

    }

    if (!lastName.value.match(nameReg)) {

        swal({
            title: "Invalid Last Name",
            icon: "warning",
            button: "ok!",
        });

    }
    if (!firstName.value.match(nameReg)) {

        swal({
            title: "Invalid First Name",
            icon: "warning",
            button: "ok!",
        });

    }

}
function checkstep1(){
if((nameReg).test(firstName.value) == true && (nameReg).test(lastName.value) == true
&& (nameReg).test(fatherName.value) == true && (emailReg).test(email.value) == true
&&(nameReg).test(gender.options[gender.selectedIndex].text) == true){
    step2()
}

    if (!gender.options[gender.selectedIndex].text.match(nameReg)) {

        swal({
            title: "Select Gender",
            icon: "warning",
            button: "ok!",
        });

    }
    if (!email.value.match(emailReg)) {

        swal({
            title: "Invalid Email ",
            icon: "warning",
            button: "ok!",
        });

    }
    if (!fatherName.value.match(nameReg)) {

        swal({
            title: "Invalid Father Name",
            icon: "warning",
            button: "ok!",
        });

    }

    if (!lastName.value.match(nameReg)) {

        swal({
            title: "Invalid Last Name",
            icon: "warning",
            button: "ok!",
        });

    }
    if (!firstName.value.match(nameReg)) {

        swal({
            title: "Invalid First Name",
            icon: "warning",
            button: "ok!",
        });

    }


}


function alldata() {
    main2b.style.display = "none"
    main2a.style.display = "none"
    main2c.style.display = "block"


    main2c.innerHTML = `


<div class="preview">
<div class="preview1">
   <div class="preview1-a">
    <div class="preview1-a-1">
        <h3>First Name:</h3>
        <p>${firstName.value}</p>
    </div>
    <div class="preview1-a-2">
        <h3>Last Name:</h3>
        <p>${lastName.value}</p>

    </div>
   </div>

   <div class="preview1-a" >
    <div class="preview1-a-1">
        <h3>Father Name:</h3>
        <p>${fatherName.value}</p>
    </div>
    <div>
        <h3>Email:</h3>
        <p>${email.value}</p>

    </div>
    </div>
    
    <div class="preview1-a">
        <div>
            <h3>Phone Number:</h3>
            <p>${phone.value}</p>
        </div>
        <div>
            <h3>Gender:</h3>
            <p>${gender.options[gender.selectedIndex].text}</p>
    
        </div>
    

    </div>

    <div class="preview1-a">
        <div>
            <h3>Qualification:</h3>
            <p>${qualification.value}</p>
            
        </div>
        <div>
            <h3>Linkdin ID:</h3>
            <p>${linkdin.value}</p>
        </div>
        
</div>

<div class="preview1-a">
    <div>
        <h3> Skill:</h3>
        <p>${skill.value}</p>
    </div>
    <div>
        <h3>City:</h3>
        <p>${city.options[city.selectedIndex].text}</p>
    
    </div>
    
</div>








    </div>
    
    <button class="btn btn1" onclick="submit()"><b>Submit</b></button>
    </div>
    



`

}

const checkstep2 = ()=>{
if(
 (numReg).test(phone.value) == true && (nameReg).test(city.options[city.selectedIndex].text) == true

){

    alldata()
}




if (!phone.value.match(numReg)) {

    swal({
        title: "Invalid Phone Number ",
        icon: "warning",
        button: "ok!",
    });

}
if (!(city.options[city.selectedIndex].text).match(nameReg)) {

    swal({
        title: "Select Your City ",
        icon: "warning",
        button: "ok!",
    }
   
    )

}}
function print(a,b,c,d,e) {
    admin_b.innerHTML+=
        `
<div class="admin-b-1">

        <span class="header">${a}</span>
        <span class="header">${b}</span>
        <span class="header gmail">${c}</span>
        <span class="header">${d}</span>
        <span class="header">${e}</span>
    </div>
`

console.log(admin_b.length)
}


function adminCall() {

    var keys = Object.keys(localStorage)
    console.log(keys)
    for (var i = 0; i < keys.length; i++) {
        console.log((JSON.parse(localStorage.getItem(keys[i]))))
        var data = JSON.parse(localStorage.getItem(keys[i]))
        print(data[0][0], data[0][1], data[0][2], data[0][3], data[0][4])

        // console.log(data[0][1])
        // for(var j=0 ; j<data[0].length ;j++){
        //     console.log(data[0][j])
        //     admin_b.innerHTML=
        //     `
        //             <span class="header">${data[0][j]}</span>
        // `
        // }
        // console.log(data[0][0])
        // console.log(data[0][1])
        // console.log(data[0][2])
        // console.log(data[0][3])
        // console.log(data[0][4])
        // var a = data[0][0]
        // var b = data[0][1]
        // var c = data[0][2]
        // var d = data[0][3]
        // var e = data[0][4]
        // admin_b.innerHTML=
        // `
        // <div class="admin-b-1">

        //         <span class="header">${(JSON.parse(localStorage.getItem(keys[i])))[0][0]}</span>
        //         <span class="header">${(JSON.parse(localStorage.getItem(keys[i])))[0][1]}</span>
        //         <span class="header gmail">${(JSON.parse(localStorage.getItem(keys[i])))[0][2]}</span>
        //         <span class="header">${(JSON.parse(localStorage.getItem(keys[i])))[0][3]}</span>
        //         <span class="header">${(JSON.parse(localStorage.getItem(keys[i])))[0][4]}</span>
        //     </div>
        // `

    }
    console.log(admin_b)
}

adminCall()
function logintest() {
    let user = document.getElementById("user")
    let pass = document.getElementById("pass")
    if (user.value === "admin" && pass.value === "admin") {
        document.getElementById("admin").style.display = "block"
        const adminlogin = document.getElementById("adminlogin").style.display = "none"



    } else {
        swal(
            {
                icon: "warning",
                title: "Wrong username or password"
            }
        )
    }
}
function loginadmin() {
    const adminlogin = document.getElementById("adminlogin")
    document.getElementById("main").style.display = "none"
    adminlogin.innerHTML =
        `<div class="loginadmin">
<div><p>Username:</p>
<input type="text " placeholder="Username" class="user" id="user"></div>
<div><p>Password:</p>

<input type="password " placeholder="password" class="pass" id="pass">
</div>
<button class="login" onclick="logintest()"><b>Login</b></button>
</div>



`

}