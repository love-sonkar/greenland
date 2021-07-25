

console.log('loaded');

// let menuclick = document.querySelector('.menu-bar');
// let open = document.querySelector('.open');

// open.addEventListener('click', ()=> {
//     if(menuclick.style.top == "50px"
//         ){
//         menuclick.style.top = "-188px";
//     }else{
//         menuclick.style.top = "50px";
//     }
// }) 




let menuclick = document.querySelector('.mobile-res');

let open = document.querySelector('.open');

open.addEventListener('click', ()=>{
    if(menuclick.style.display == "none"){
        menuclick.style.display = "block";
    }else{
        menuclick.style.display = "none";
    }
})