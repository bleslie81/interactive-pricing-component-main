/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/

window.onload = function (){
    loadSlider()
}

let rangebar = document.getElementById('rangebar')
let pviews = document.getElementById('pviews')
let pdollar = document.getElementById('pdollar')
let toggle = document.querySelector('.toggle-button') 
let discount = document.querySelector('.discount')


function loadSlider(){
    switch(rangebar.value){
        case '20':
            pviews.textContent = '10K'
            pdollar.textContent = 8
            break;
        case '40':
            pviews.textContent = '50K'
            pdollar.textContent = 12.00
            break;
        case '60':
            pviews.textContent = '100K'
            pdollar.textContent = 16.00
            break;
        case '80':
            pviews.textContent = '500K'
            pdollar.textContent = 24.00
            break;
        case '100':
            pviews.textContent = '1M'
            pdollar.textContent = 36.00
            break;
        default:
            console.log('Error');
        }
}

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active')
    discount.classList.toggle('active')
})