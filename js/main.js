var button=document.querySelector(".button");
var form=document.querySelector(".index-form");
button.addEventListener("click", function(e){
  e.preventDefault()
  form.classList.toggle("index-form-hidden")
})