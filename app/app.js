

//get elements
const counter_form = document.getElementById('counter_form');
const bar = document.getElementById('bar');
const perValue = document.getElementById('perValue');
const counter = document.querySelector('.counter');

    let clea_count;
//form submit
counter_form.onsubmit = ( event ) => {
    event.preventDefault();

    clearInterval(clea_count);
    
    // get value from input
    const formData = new FormData(event.target);
    const { date, time } = Object.fromEntries(formData.entries());


    //time values
    const start_time = Date.now();
    const end_time = new Date(date + ' ' + time);


    clea_count = setInterval( () => {
        
        time_counting(date, time, counter, clea_count);

        let percent = counterPer(start_time, end_time);

        if ( percent >= 0 && percent <= 30 ) {

            bar.style.backgroundColor = 'pink';

        } else if ( percent >= 31 && percent <= 60 ) {

            bar.style.backgroundColor = 'red';
        }

        percent && (bar.style.display = 'block');
        percent && (perValue.style.display = 'block');

        bar.style.width = `${ 100 - percent}%`;

        perValue.innerHTML = `${ 100 - percent }%`;


    }, 1000);
    



   
    
}