// fill in javascript code here

let form=document.querySelector("form");

form.addEventListener("submit",record);


function record(e){
e.preventDefault()
let obj={
    name:document.getElementById("name").value,
    id:document.getElementById("employeeID").value,
   dep:document.getElementById("department").value,
    exp:document.getElementById("exp").value,
    email:document.getElementById("email").value,
    mbl:document.getElementById("mbl").value
}

let tRow=document.createElement("tr")
let td1=document.createElement("td")
td1.innerText=obj.name
let td2=document.createElement("td")
td2.innerText=obj.id
let td3=document.createElement("td")
td3.innerText=obj.dep
let td4=document.createElement("td")
td4.innerText=obj.exp
let td7=document.createElement("td")
if(obj.exp>5){
    td7.innerText="Senior"
}else if(obj.exp>1 && obj.exp<5){
    td7.innerText="junior"
}else{
    td7.innerText="trainee"
}
let td5=document.createElement("td")
td5.innerText=obj.email
let td6=document.createElement("td")
td6.innerText=obj.mbl
let td8=document.createElement("td")
td8.innerText="Delete"
td8.style.backgroundColor="Red"
td8.style.cursor="pointer"
td8.addEventListener("click",del)
function del(e){ 
    e.target.parentNode.remove()
}


tRow.append(td1,td2,td3,td4,td5,td6,td7,td8)

document.querySelector("tbody").append(tRow)


}



