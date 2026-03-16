import '../styles/main.css';

document.getElementById("btn-enter-here")?.addEventListener("click", () =>{
    window.location.href = "main.html"
});

document.getElementById("btn-home")?.addEventListener("click", () =>{
    console.log("Going Home")
    window.location.href = "index.html"
});

document.querySelectorAll('.trails-menu-1').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.closest('.trails-menu-1');
    console.log(parent);
    parent?.classList.toggle('open');
  });
}); 

document.querySelectorAll('.trails-menu-2').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.closest('.trails-menu-2');
    console.log(parent);
    parent?.classList.toggle('open');
  });
}); 