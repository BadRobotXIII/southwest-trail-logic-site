import '../styles/main.css';

document.getElementById("btn-enter-here")?.addEventListener("click", () =>{
    window.location.href = "main.html"
});

document.getElementById("btn-home")?.addEventListener("click", () =>{
    console.log("Going Home")
    window.location.href = "index.html"
});
        