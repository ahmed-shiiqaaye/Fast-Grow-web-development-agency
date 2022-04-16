let menuBar = document.querySelector('.menu-bar');
let navLinks = document.querySelector('.nav-links');


menuBar.onclick = () =>{
    navLinks.classList.toggle('remove');
    if(navLinks.classList.contains('remove')){
        menuBar.innerHTML = `<i class="fa fa-times"></i>`
    }else{
        menuBar.innerHTML = `<i class="fa fa-bars"></i>`
    }
}