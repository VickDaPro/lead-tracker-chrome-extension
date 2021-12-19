// function saveLead() {
//     console.log("Button clicked!")
// } // old and obsolete technique

// Technique that Proffesionals use

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked")
// })

let myLeads = ['www.in.com', 'www.comcom.in', 'www.greatlead.com']
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked!")
// })

inputBtn.addEventListener("click", function() {
    // document.getElementById('input-btn').value
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i ++) {
    console.log(myLeads[i])
}
