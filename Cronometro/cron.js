"use strict"

let hour = 0;
let minute = 0;
let second = 0;

let time = 1000; //está em milesimos que euivalem a  1 segundo
let cron;

function start(){

        cron = setInterval(() => { timer(); }, time);
}

function pause(){
    clearInterval(cron);
}
    

function stop(){
    clearInterval(cron);
    hour = 0;
    minute = 0;
    second = 0;
}

    
function timer(){
    second++;
    if(second == 60){
        second = 0;
        minute++;

        if(minute == 60){
            minute = 0;
            hour++;
        }
    }

    let format = (hour < 10 ? '0' + hour : hour)  + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    document.getElementById('counter').innerHTML = format;
}

// Codigo pertencente a horario
setInterval(() => { watch() }, 1000)

function watch(){

    let d = new Date()
    let t = d.toLocaleTimeString()
    document.getElementById('currentHour').innerHTML = t
}

// codigo pertecente a data
function date(){
    let dd = new Date()
    let today = dd.toLocaleDateString()
    document.getElementById('dating').innerHTML = today
}
date()