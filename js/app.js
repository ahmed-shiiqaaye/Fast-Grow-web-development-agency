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

// btns filter
let btnFilters = document.querySelector('.btns');
let filterCard = document.querySelectorAll('.cardData');


// window.onload = () =>{
//     btnFilters.onclick = (e) =>{
//         let selected = e.target;
//         if(selected.classList.contains('btnFilter')){
//             btnFilters.querySelector('.active').classList.remove('active');
//             selected.classList.add('active');
//             let filterName = selected.getAttribute('data-name');
//             console.log(filterName)

//             filterCard.forEach((card)=>{
//                 let filterData = card.getAttribute('data-name');
//                 if(filterData == filterName || filterName == 'all'){
//                     card.classList.add('show')

//                 }else{
//                     card.classList.add('hide')
//                     card.classList.remove('show');
//                 }
//             })
//         }
//     }
    
// }

// slider
let btnNext = document.querySelectorAll('.next');
let btnPrev = document.querySelectorAll('.prev');
let wrapperContainer = document.querySelectorAll('.wrapper');

for (let i = 0; i < wrapperContainer.length; i++) {
    let wrapper = wrapperContainer[i]
    let containerW = wrapper.getBoundingClientRect().width;
    btnNext[i].onclick = ()=>{
        wrapper.scrollLeft += containerW;
        console.log('ji')
    }
    btnPrev[i].onclick = ()=>{
        wrapper.scrollLeft -= containerW;
    }
    
}

let counters = document.querySelectorAll('.counters');
let speed = 100;


window.onload =() =>{

    for (let i = 0; i < counters.length; i++) {
        let counter = counters[i];
        const updateCount = () =>{

            let target = +counter.getAttribute('data-target');
            let inc = target / speed;
            let count = +counter.textContent
            
            if(count < target){
                counter.textContent = count + inc;
                setTimeout(updateCount,1)
            }else{
                count.textContent = target
            }
               
        }
        updateCount()
}

    }