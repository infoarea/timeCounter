

/*
* Meessage Alert Functions
*/
const msgAlert = (msg, type = 'danger') =>{
        return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}

/**
 * Email check function
*/

const emailCheck = (email) => {
    const emailPattern = /^[a-z0-9\._]{1,}@[a-z0-9\._]{1,}\.[a-z]{2,4}$/;

   return emailPattern.test(email);
}


/**
 * Phone Number check function
*/
const phoneCheck = (phone) => {
    const phonePattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return phonePattern.test(phone);
}


/**
 * Number Checking
*/

const numberChecker = (num) =>{
    let numberPattern = /^[0-9]{1,3}$/;

   return numberPattern.test(num);
}


/**
 * set value to local storage
*/
// const getLSData = (key) => {

//     if ( localStorage.getItem(key) ) {
//        return JSON.parse(localStorage.getItem(key)); 
//     }else {
//         return false;
//     }

// }
// //set data from ls
// const setLSData = ( key, value ) => {

//     let data = []; 
//     //Get exesting data from LS
//    if ( localStorage.getItem(key) ) {
//     data = JSON.parse(localStorage.getItem(key));
//    }
//    //set new Data
//    data.push(value);

//    localStorage.setItem(key, JSON.stringify(data));

// }

// //Update product LS data

// const updateData = ( key, arrr ) => {
//     localStorage.setItem( key, JSON.stringify(arrr) );
// }

// Send Data to Localstorage
const sendLSData = ( key, value ) => {

    let data = [];
    if ( localStorage.getItem(key) ) {
        data = JSON.parse(localStorage.getItem(key));
    }
    data.push(value);

    localStorage.setItem(key, JSON.stringify(data) );
}

//Get LS data from LS
const getLSData = (key) => {

    if (  localStorage.getItem( key ) ) {
        
      return JSON.parse(localStorage.getItem( key ));
    } else{
        return false;
    }

}

//Update LS Data
const updateLSData = ( key, arrrr ) => {
    localStorage.setItem(key, JSON.stringify(arrrr))
}




// future time counter
const time_counting = ( date, time, counter, clea_count = null) => {

    //time values
    const start_time = Date.now();
    const end_time = new Date(date + ' ' + time);

    const order_time_milsec = end_time.getTime() - start_time;

    //milisecend converting
    const total_sec = Math.floor(Math.abs(order_time_milsec / 1000));
    const total_min = Math.floor(Math.abs(total_sec / 60));
    const total_hour = Math.floor(Math.abs(total_min / 60));
    const total_day = Math.floor(Math.abs(total_hour / 24));

    
    const hour = total_hour - ( total_day * 24 );
    const min = total_min - ( total_day * 24 * 60 ) - ( hour * 60 );
    const sec = total_sec - ( total_day * 24 * 60 * 60 ) - ( hour * 60 * 60 ) - ( min * 60 );

    if ( total_sec <= 0 ) {
        clearInterval(clea_count); 
    }

    counter.innerHTML = `<h4> ${total_day} Days : ${hour} Hours : ${min} Minutes : ${sec} sec </h4>`;


}

//percentage counter
const counterPer = (start_time, end_time) => {

    const time_diff = end_time - start_time;
    const time_change = end_time - Date.now();

    return Math.floor((100 * time_change) / time_diff);
}

