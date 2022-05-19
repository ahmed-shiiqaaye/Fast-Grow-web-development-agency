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
let btnFilters = document.querySelectorAll('.btns');
let filterCard = document.querySelectorAll('.cardData');


for (let i = 0; i < btnFilters.length; i++) {
    btnFilters[i].addEventListener('click',(e)=>{
        e.preventDefault();
        let filterData = e.target.getAttribute('data-name');
        console.log(filterData)
        btnFilters[i].querySelector('.active').classList.remove('active');
        e.target.classList.add('active')

        filterCard.forEach(card =>{
            if(filterData == 'all'){
                card.style.display = 'grid';
            }else{
                if(card.classList.contains(filterData)){
                    card.style.display = 'grid'
                }else{
                    card.style.display = 'none'
                }
            }
        })
    })
}

let goTop = document.querySelectorAll('.to-top');
for (let i = 0; i < goTop.length; i++) {
    
    window.addEventListener('scroll',()=>{
        let scrollHeight = window.pageYOffset;
        if(scrollHeight > 400){
            goTop[i].style.display = 'block'
        }else{
            goTop[i].style.display = 'none'
        }
    })
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

let tabContents = document.querySelectorAll('.tab-content .content');
let tabBtns = document.querySelectorAll('.tab-btns button');

tabBtns.forEach((tabbtn,i)=>{
    tabbtn.onclick = () =>{
        tabBtns.forEach(btn=>{
            btn.classList.remove('active')
        })
        tabContents.forEach(content =>{
            content.classList.remove('active')
        })
        tabContents[i].classList.add('active');
        tabBtns[i].classList.add('active');
    }
})

let sliderScroll = document.querySelectorAll('.wrapper-slider');
let btnNext = document.querySelectorAll('.next');
let btnPrev = document.querySelectorAll('.prev');

sliderScroll.forEach((slider, i)=>{
    let sliderWidth = slider.getBoundingClientRect().width;
    btnNext[i].addEventListener('click',()=>{
        slider.scrollLeft += sliderWidth
    })
    btnPrev[i].addEventListener('click',()=>{
        slider.scrollLeft -= sliderWidth
    })
})