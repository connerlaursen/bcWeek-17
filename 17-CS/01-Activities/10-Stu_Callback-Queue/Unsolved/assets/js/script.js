const button = document.getElementById("button");

const pause =(delay)=>{
  setTimeout(()=>{
    console.log("button was clicked")
    // button.style.display="block"
    button.setAttribute("disabled",false)
  },delay)
}


button.addEventListener("click", (e)=>{
  e.preventDefault();
  button.setAttribute("disabled",true)
  pause(8000);
})




