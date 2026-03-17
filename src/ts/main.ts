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

// Select all elements where the class starts with "string-"
// const menuTriggers = document.querySelectorAll<HTMLElement>('[class^="string-"]');

// menuTriggers.forEach((trigger) => {
//   trigger.addEventListener('click', () => {
//     // Toggle the 'open' class on the clicked element itself
//     trigger.classList.toggle('open');

//     // If the sub-menu is a child, find it and toggle it
//     const subMenu = trigger.querySelector('.sub-menu');
//     if (subMenu) {
//       subMenu.classList.toggle('expanded');
//     }
//   });
// });


// Got it. With a nested structure like that, Event Delegation can actually be a bit of a headache because clicking a "Flagstaff" link would also trigger the "Arizona" and "Trails" parents if you aren't careful.
// Since you have repeating categories (Arizona, Utah) under different top-level parents (Trails, Videos), your plan to iterate and add specific listeners is much safer for keeping the logic scoped to that specific branch.
// Here is a clean way to handle those nested toggles in TypeScript:

// // Select all triggers (e.g., Trails, Arizona, Flagstaff, etc.)const toggles = document.querySelectorAll<HTMLElement>('[class^="string-"]');

// toggles.forEach((trigger) => {
//   trigger.addEventListener('click', (e) => {
//     // Stop the click from bubbling up to parent menus
//     e.stopPropagation();

//     // Toggle the 'open' state for this specific level
//     trigger.classList.toggle('open');
    
//     // Logic to show/hide the immediate next <ul> or sub-container
//     const subMenu = trigger.querySelector(':scope > ul'); 
//     if (subMenu) {
//       subMenu.classList.toggle('visible');
//     }
//   });
// });

// Why this works for your "Trails vs Videos" setup:

//    1. e.stopPropagation(): This is the "magic" line for nested menus. It prevents the click on "Flagstaff" from also triggering the "Arizona" toggle and accidentally closing the whole section.
//    2. :scope > ul: This selector ensures you only toggle the immediate child menu of the item you clicked, rather than accidentally opening every sub-menu inside it.
//    3. Specific Targeting: By iterating, each menu item gets its own "brain," making it much easier to manage the open state of "Arizona (Trails)" independently from "Arizona (Videos)."


