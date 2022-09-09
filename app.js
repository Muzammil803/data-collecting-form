var main2 = document.getElementById("main2")
var main2a = document.getElementById("main2-a")
var main2b = document.getElementById("main2-b")
var main2c = document.getElementById("main2-c")

console.log(main2,main2a,main2b,main2c)
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

function step1(){
// alert("hello")
    main2b.style.display="none"
    main2c.style.display="none"
    main2a.style.display="block"


}
function step2(){
    main2b.style.display="block"

    main2a.style.display="none"
    main2c.style.display="none"
// alert("hello")

}
function alldata(){
    main2b.style.display="none"
    main2a.style.display="none"
    main2c.style.display="block"


main2c.innerHTML=`


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
    <button class="btn">Submit</button>

</div>




`

}