var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.getElementById("add-button");
addpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})
var cancelpopup=document.getElementById("del-popup")
cancelpopup.addEventListener("click",function(event)
{
   event.preventDefault()
   popupoverlay.style.display="none";
    popupbox.style.display="none";
})
var addbookcontainer=document.querySelector(".container")
var addbook = document.getElementById("add-popup")
var addbookname = document.getElementById("book-name")
var addbookauthor = document.getElementById("author-name")
var addbookdescription = document.getElementById("description")

addbook.addEventListener("click",function(event)
{
    event.preventDefault();
    var div =document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${addbookname.value}</h2>
    <h4>${addbookauthor.value}</h4>
    <p>${addbookdescription.value}</p>
    <button onclick="removebook(event)">DELETE</button>`
    addbookcontainer.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";
}
)
function removebook(event)
{
    event.target.parentElement.remove()
}
