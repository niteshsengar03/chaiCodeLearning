//TODO
// if i am in dark mode in button should come toggle to light mode and vice versa for toggle to dark mode 
const button = document.getElementById("toggleButton");
button.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})
