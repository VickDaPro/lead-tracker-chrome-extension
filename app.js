// function saveLead() {
//     console.log("Button clicked!")
// } // old and obsolete technique

// Technique that Proffesionals use

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked")
// })

let myLeads = [];
// let myLeads = `["www.awesomelead.com"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.in.com");
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
console.log(ulEl);

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  // document.getElementById('input-btn').value
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

// let listItems = ""
// for (let i = 0; i < myLeads.length; i ++) {

// ulEl.textContent += myLeads[i] + " "
// using innerHTML helps parsing HTML elements in javaScript
//DOM manipulation

// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

// doing this to improve the performance of the rendering
// listItems += "<li>" + myLeads[i] + "</li>"
// }
// render the listItems inside the unordered list using ulel.innerHTML
// using this to render it one time out of the for loop vs doing it three times inside the for loop

// ulEl.innerHTML = listItems

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

    // Now using template strings
    listItems += `
    <li>
<a target="_blank" href="${myLeads[i]}">
${myLeads[i]}
</a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

// different method
// above one is much better

// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
