document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerText = "iNeuron"
document.getElementsByTagName("p")[0].innerText = "I Write Code"



// 2.

const arr = []
document.querySelectorAll(".as-imagegrid-item").forEach((item) => (
    arr.push(item.innerText.replace("\nSupport", ""))
))
console.log(arr);
(7)['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

// 3

let h3 = document.createElement("h3")
h3.innerText = "My New FAQ"

let section = document.createElement("section");
section.classList.add('parent');
section.appendChild(h3)


document.querySelector(".accordion-homepage").appendChild(section)

//4

document.querySelector(".one-tel-number").innerText = "+9123456789"


//5  getElementById, createElement, InnerText, append, setAttribute

document.querySelectorAll(".diwali-deals-product-sale-btn")
                           .forEach((e) => e.innerText = "Check out");


//6

document.querySelector(".searchinput___19uW0").style.backgroundColor = "red"
searchinput___19uW0.addEventListener("mouseenter", (Event)=>{
    Event.target.style.color = "red"
})

//7

let input = document.querySelector(".search-input-field"); 
input.value = "CSS Selectors"; 
let form = document.getElementById(".top-nav-search-input"); 
function submitForm()
{
    form.submit();
}
 submitForm();

 function submit(){
    document.querySelector("#top-nav-search-input").value="submit()";
    document.querySelector("#top-nav-search-form").submit();
};
submit();

//8
document.getElementById("SIvCob").innerText=" Google offered in:  English   বাংলা     मराठी  "



//9 Change the font family of the text to monospace and text color to the logo’s background color

document.querySelector(".display-heading-1").style.color = "red"

let head = document.querySelector(".display-heading-1");
head.style.fontFamily = "monospace";
head.style.color = "#b1361e";

//10
let btn = document.querySelector(".login-btn-text");
btn.addEventListener("mouseover", function hoverBg(e){
    e.target.style.backgroundColor = "red";
})


//>  querySelector, mouseover, click eventListener,  callback function, style,
 
//11
const abc= document.createElement("img");
abc.src= "https://ineuron.ai/images/ineuron-logo.png"
abc.style.width= "80px"
document.querySelector(".logo span").classList.remove("icon", "icon-logo", "in");
document.querySelector(".logo span").appendChild(abc);

//12easy
document.querySelector(".btn").style.backgroundColor = "blue"
//13 done easily
document.querySelector(".fl-heading").innerHTML ="FSJS Bootcamp"

//14 done by struggle
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontsize = "80px"

// 15 done by community help

document.querySelector(".ps").style.textAlign = "right"


 //16  done by me

 document.querySelector(".section-title_title__VEDfK").innerHTML= "Start with Scratch"

 //17




 //18

 document.querySelector(".p-footer").style.backgroundColor="orange";

 //19

 document.querySelector(".logo").src;

 //20

 let data=document.querySelectorAll("h3.desc");
data.forEach((el)=>el.style.color="orange");


