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
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

    // Now using template strings
    listItems += `
	  <li>
  <a target="_blank" href="${leads[i]}">
  ${leads[i]}
  </a>
	  </li>
	  `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  // document.getElementById('input-btn').value
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// const tabs = [{ url: "https://www.linkedin.com/in/per-herald-borgen/" }];

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
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

// different method
// above one is much better

// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
