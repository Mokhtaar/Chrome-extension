let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const unEl = document.getElementById("ul-el")



inputBtn.addEventListener ("click", function(){
      myLeads.push(inputEl.value)
      inputEl.value=""
      //console.log(myLeads)
      render()
})




function render()
  {
    //console.log(myLeads.length)
    let listItems = ""
    for (let i=0; i<myLeads.length; i++)
     {
       //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" 

       listItems += 
         `<li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
          </li>` 
       
       // 1- unEl.innerHTML += "<li>" + myLeads[i] + "</li>"
       // 2- const li = document.createElement("li")
       //    li.textContent = myLeads[i]
       //    unEl.append(li)
       //console.log(listItems)
     }
    unEl.innerHTML = listItems
  }


  