document.getElementById('btn').addEventListener('click', registerUser);

function registerUser(e){

    e.preventDefault();

    
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value

    // console.log(name);
    // console.log(mail);
    // console.log(phone);
    // console.log(date);
    // console.log(time);

    // localStorage.setItem('name', name);
    // localStorage.setItem('mail', mail);
    // localStorage.setItem('phone', phone);
    // localStorage.setItem('date', date);
    // localStorage.setItem('time', time);


    let myObj = {
        'name' : name,
        'mail' : mail,
        'phone' : phone,
        'date' : date,
        'time' : time
    }

    let serialized = JSON.stringify(myObj);

    // console.log(serialized)

    localStorage.setItem('myobj', serialized)

    // console.log(localStorage);


    let deserialized = JSON.parse(localStorage.getItem('myobj'))        //   myobj is the key of localStorage item as i gave above   (localStorage.setItem('myobj', serialized))

    console.log(deserialized)

    localStorage.setItem('my_obj',deserialized)

    
    
}

