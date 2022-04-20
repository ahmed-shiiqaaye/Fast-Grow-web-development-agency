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