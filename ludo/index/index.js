
function main_audio(){
    let aname2="sounds/background_audio.wav"
    let au2=new Audio(aname2);
    au2.volume=0.1;
    au2.play();
    au2.loop=loop;
}


function disc_roll_sound(){
    let aname1="sounds/disc_roll.mp3"
    let au1=new Audio(aname1);
    au1.volume=0.4;
    au1.play();
}





//Main users details
let Gmails=[];
let Passwords=[];
let no_of_users=0;
//Main lodin function

function chech_details_login(){
    let logGmail=document.querySelector("#gmail");
    let logPass=document.querySelector("#pass");
    var i=0;
    var chech=false;
    while (i!=Gmails.length){
        console.log(logGmail.value);
        console.log(logPass.value);
        if (Gmails[i]===logGmail.value && Passwords[i]===logPass.value){
            chech=true;
            break
        }
        i++
    }
    logGmail.value="";
    logPass.value="";
    //let logGmail=document.querySelector("#gmail");
    //let logPass=document.querySelector("#pass");
    if (chech===true) {
        alert("loged in success");
        var stt=document.getElementById("start");
        stt.style.display="block";
        var hsl=document.getElementById("singlogin");
        hsl.style.display="none";
        main_audio();

    }

    else{
        alert("Invalid details");
        logGmail.value="";
        logPass.value="";
    }

}


/*Function to show password*/
function show_pass(){
    var chech=document.getElementById("pass");
    if(chech.type==="password"){
        chech.type="text";
    }
    else{
        chech.type="password";
    }

}


function create_account(){
    var hsl=document.getElementById("hide_login");
    hsl.style.display="none";

    let new_gmail=document.querySelector("#gmail");
    let new_pass=document.querySelector("#pass");
    document.querySelector("#create_head").style.display="block";
    if (new_gmail.value!=="" && new_pass.value==="" || new_pass.value!=="" && new_gmail.value===""){
        alert("Fill all details");
    }

    if(new_gmail.value!=="" && new_pass.value!==""){
        Gmails[no_of_users]=new_gmail.value;
        Passwords[no_of_users]=new_pass.value;
        var hsl=document.getElementById("hide_login");
        hsl.style.display="block";
        document.querySelector("#create_head").style.display="none";
    }
    new_gmail.value="";
    new_pass.value="";


}


function back_to_s_login(){
    document.getElementById("hide_login").style.display="block";
    document.querySelector("#create_head").style.display="none";
}

var count=0;
function start_button(){
    disc_roll_sound();
    setInterval(() => {
        count++;
        if(count>=1){
            document.querySelector("#move_to_main").href="../main/main.html";
            document.querySelector("#move_to_main").click();
        }
    },1000);
}