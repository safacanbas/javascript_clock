let myName = document.querySelector("#myName");
let name = prompt("Adınız Nedir? ");
myName.innerHTML = `${name}`

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds =  date.getSeconds();
    let days =  date.getDay();
    let dayList = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + dayList[days]

    document.querySelector("#myClock").innerHTML = time;
    setTimeout(showTime, 1000);
}
showTime();
