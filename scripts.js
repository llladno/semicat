
const line = document.getElementsByClassName('line')[0]
let wi = window.innerWidth
let wistart = wi

wi = 0

setInterval(()=>{
    wi = wi + window.innerWidth
    if(wi === wistart*3)wi = 0
    line.style.left = -wi + 'px'
    console.log('su')
    console.log(wi)

},3500)
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

console.log(window.pageYOffset)
console.log(window.innerWidth)

let circles = document.getElementsByClassName('circle')

addEventListener("scroll", (event) => {
    // if(window.scrollY > 20 && window.scrollY < window.innerWidth){
    //     console.log("su")
    //     window.scrollY = window.innerWidth
    //     window.scrollTo(0, 500)
    //     console.log('su')
    // }
    let all4 =  scrollHeight/3
    if(window.scrollY < all4){
        let a
        a = (window.scrollY * 100)/all4
        console.log(Math.round(a))
        let roun = Math.round(a)
        circles[0].style.opacity = 20+roun + "%"
        circles[1].style.opacity = 100+50-roun + "%"
    }
    else if(window.scrollY < all4*2){
        let a

        a = (window.scrollY * 100)/(all4*2)
        console.log(a)
        let roun = Math.round(a)
        circles[1].style.opacity = roun + "%"
        circles[2].style.opacity = 100+50-roun + "%"

    }
    else if(window.scrollY < all4*3){
        let a
        console.log(3)
        a = (window.scrollY * 100)/(all4*4)
        console.log(a)
        let roun = Math.round(a)
        circles[2].style.opacity = 100+50-roun + "%"

    }

    // console.log(window.scrollY)
});


console.log(scrollHeight)