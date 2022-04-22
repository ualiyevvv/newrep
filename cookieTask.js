let now = new Date();//creating date
now.setTime(now.getTime());//setting time

let theTime = 0;//creating current time
let secondTime = getCookie("time");//setting previous time
function setCookie(){//setting cookies
    let name = prompt("Enter your name: ");//inputting name
    document.cookie="name=" + name + ';';//setting name cookie
    let country = prompt("Enter your country: ");//inputting country
    document.cookie="country=" + country + ';';//setting country cookie
    let mail = prompt("Enter your mail: ");//inputting mail cookie
    document.cookie="email=" + mail + ';';//setting mail cookie
}

function getCookie(cname) {//cookie get function
    let name = cname + "=";
    let decode = decodeURIComponent(document.cookie);//decoding encoded URI component i.e. makes it readable
    let ca = decode.split(';');//splitting cookie with semicolon
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];//declaring c with name and value
        while (c.charAt(0) == ' ') {//getting rid of empty spaces
            c = c.substring(1);
            console.log(c);
        }
        if (c.indexOf(name) == 0) {//if cookie is found
            return c.substring(name.length, c.length);//returning cookie
        }
    }
    return "";//else return nothing
}
theTime = now.getUTCSeconds();//time equals to seconds of local time
function checkCookie(){//checking if cookie already exists
    let value = getCookie("name");
    if(value != ""){//if yes welcome visitor
        alert("Welcome again " + value + ". Nice to see you again!");
    } else{//if not then set cookies
        setCookie();
    }
}

alert(getCookie("name") + " " + getCookie("country") + " " + getCookie("email"));//show name,country and mail of visitor

if(secondTime == 0){//if previous time is 0
    alert("You visited this site in " + now.toUTCString());//show current time
    document.cookie = "time=" + theTime + ';';//set new cookie time
} else {
    alert("You visited this site " + (theTime-secondTime) + " seconds ago");//else show how many seconds ago site was visited
    document.cookie = "time=" + theTime + ';';//change cookie time
}