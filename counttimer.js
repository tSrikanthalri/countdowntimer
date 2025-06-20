function countDown(){

    setInterval(function(){

    let destination = new Date("june 23, 2025, 10:00:00").getTime();
    let current = new Date().getTime();
    let difference = destination-current;

    let day = Math.floor(difference / (1000*60*60*24));
    console.log(day);

    let hr = Math.floor(difference % (1000*60*60*24)/(1000*60*60));
    console.log(hr);

    let min = Math.floor(difference % (1000*60*60)/(1000*60));
    console.log(min);

    let sec = Math.floor(difference % (1000*60) /(1000));
    console.log(sec);

    document.getElementById("day").innerHTML=day+"<br/>" + "Day";
    document.getElementById("hr").innerHTML=hr+"<br/>" + "Hr";
    document.getElementById("min").innerHTML=min+"<br/>" + "Min";
    document.getElementById("sec").innerHTML=sec+"<br/>" + "Sec";





},1000)
}
countDown();