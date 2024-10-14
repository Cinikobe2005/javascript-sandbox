// // DOM - Document Object Model
// // how to select elements on the webpage
// // class id, tag, combination

// // get element by the id
// const text = document.getElementById("text");
// console.log(text);

// // get element by the class name

// const message = document.getElementsByClassName("message");
// console.log(message);

// // querySelector, querySelectorAll - use css selectors - #, div.class
// const paragraph = document.querySelector("p");
// console.log(paragraph);
// // querySelector only select the first element with the same selector

// const paragraphs = document.querySelectorAll(".message");
// console.log(paragraphs);

// const heading6 = document.querySelector("div h6");
// console.log(heading6);

// //  method we can use to interact with the content
// // textContent, innerText, innerHTML

// const heading = document.querySelector("h1");
// console.log(heading.textContent);
// heading.textContent += " IS FUN"

// console.log(heading.innerText);
// heading.innerText += " And Good";

// const div = document.querySelector("div");
// console.log(div.innerHTML);
// div.innerHTML += "<p>okay<p>";
// const name = "John"
// div.innerHTML = `<h1>Welcome ${name}<h1>`;

// // chnage attributes
// const beginPara = document.querySelector(".begin");
// console.log(beginPara);
// beginPara.className = "okay";
// beginPara.id = "good";
// beginPara.style.color = "red";
// beginPara.style.backgroundColor = "green";

// // interact with css classnames
// const h1 = document.querySelector("h1");
// h1.className = "success"
// // classList .add or remove, contains

// const msg = document.querySelector("p.message");
// // console.log(msg.classList);
// msg.classList.add("error");
// msg.classList.remove("fuck");
// console.log(msg.classList.contains("good"));
// console.log(msg);

// // create elements
// const section = document.createElement("section");
// section.innerHTML = "<h1>Created from Js<h1>";

// // append it
// const body = document.querySelector("body");
// body.appendChild(section);

// // remoeve element removeChild
// // body.removeChild(section);

// // replace child
// const link = document.createElement("a");
// link.innerText = "Vist Google";
// // link.href = "http://yahoo.com";
// link.setAttribute("href", "http://yahoo.com");

// body.replaceChild(link, section);

// // responding to users interactions
// // event (click), event handler
// // addEventlistener - handler
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     console.log("btn Clicked");
//     body.style.backgroundColor = "aqua"
// });


//form handling
//select the form first
const form = document.querySelector("form")
//listen out for a submit event
form.addEventListener("submit", (event)=>{
  //default event of all forms isto refresh the page
  event.preventDefault()
  //select input fields
  const username = document.querySelector(".username")
  const password = document.querySelector(".password")

  const usernameValue = username.value.trim()
  const passwordValue = password.value
  const small = document.querySelector("small")
  console.log(usernameValue,passwordValue);
  //validate()
  if (!usernameValue || !passwordValue) {
    //display error message
    // console.log("please, provide all fields");
    small.textContent = "please fill all fields"
  } else if (usernameValue.length < 5) {
    small.textContent = "Minimum username length is 5"
  } else if (passwordValue.toLowerCase().includes("password")) {
    small.textContent = "password must not include password";
  } else {
    // submit the form
       small.textContent = "Form Submitted";
  }
})