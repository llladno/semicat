const line = document.getElementsByClassName('line')[0]
let wi = window.innerWidth
let wistart = wi
let sendMail = document.getElementsByClassName('sendMail')[0]
wi = 0

setInterval(() => {
    wi = wi + window.innerWidth
    if (wi === wistart * 3) wi = 0
    line.style.left = -wi + 'px'
    console.log('su')
    console.log(wi)

}, 3500)
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

let circles = document.getElementsByClassName('circle')

addEventListener("scroll", (event) => {
    let all4 = scrollHeight / 3
    if (window.scrollY < all4) {
        let a
        a = (window.scrollY * 100) / all4
        console.log(Math.round(a))
        let roun = Math.round(a)
        circles[0].style.opacity = 20 + roun + "%"
        circles[1].style.opacity = 100 + 50 - roun + "%"
    } else if (window.scrollY < all4 * 2) {
        let a

        a = (window.scrollY * 100) / (all4 * 2)
        console.log(a)
        let roun = Math.round(a)
        circles[1].style.opacity = roun + "%"
        circles[2].style.opacity = 100 + 50 - roun + "%"

    } else if (window.scrollY < all4 * 3) {
        let a
        console.log(3)
        a = (window.scrollY * 100) / (all4 * 4)
        console.log(a)
        let roun = Math.round(a)
        circles[2].style.opacity = 100 + 50 - roun + "%"

    }

    // console.log(window.scrollY)
});


function init() {
    let map = new ymaps.Map('map', {
        center: [59.888835, 30.391039],
        zoom: 13

    })
    let placemark = new ymaps.Placemark([59.888835, 30.391039], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/AboutUs/placeholder.png',
        iconImageSize: [25, 25],
        iconImageOffset: [0, 0]
    })
    map.geoObjects.add(placemark)
}
ymaps.ready(init)

sendMail.onclick = ()=> {
    let name = document.getElementsByClassName('name')[0]
    let email = document.getElementsByClassName('email')[0]
    let maintext = document.getElementsByClassName('textar')[0]
    let mail = {
        text: maintext.value,
        name: name.value,
        email: email.value,
    };
    console.log('sss')
    if ((maintext.value && name.value && email.value) != '') {
        async function sendMail() {
            let response = await fetch('http://localhost:3005/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(mail)
            });
        }

        console.log(mail)
        sendMail()
    } else {
        if (name.value == '') {
            console.log(name.value)
            name.style.border = '2px solid red'
            name.style.transition = 'all ease 1s';
        }
        else {
            name.style.border = '2px solid white'
        }
        if (maintext.value === '') {
            maintext.style.border = '2px solid red'
            maintext.style.transition = 'all ease 1s';
        }
        else {
            maintext.style.border = '2px solid white'
        }
        if (email.value === '') {
            email.style.border = '2px solid red'
            email.style.transition = 'all ease 1s';
        }
        else {
            email.style.border = '2px solid white'
        }
    }
}


console.log(scrollHeight)