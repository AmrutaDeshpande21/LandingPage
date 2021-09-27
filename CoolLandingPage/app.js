// DOM Elements
const time=document.getElementById('time'),
 greeting=document.getElementById('greeting'),
 entername=document.getElementById('entername'),
 focus=document.getElementById('focus');

const showAmPm=true;

// show time

function showTime()
{
    let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();

    // Set AM or PM
    const amPm=hour>=12 ? 'PM' : 'AM';

    // 12 hour format
    hour=hour % 12 || 12;

    // Output of the time
    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime,1000);
}

//Add Zero

function addZero(n)
{
    return(parseInt(n,10) < 10 ?'0' : '') +n;
}
// Set Background image and Greeting
function setBgGreet()
{
    let today=new Date(),
    hour=today.getHours();

    if (hour<12)
    {
 //Morning
 document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
 greeting.textContent="Good Morning";
    }
 else if (hour<18)
 {
 //Afternoon
 document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1590305840790-4a8c70c67d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
 greeting.textContent="Good Afternoon";
   
 }
 else
 {
 //Evening
 document.body.style.backgroundImage="url('https://www.pixelstalk.net/wp-content/uploads/2016/04/Night-mountain-wallpaper-for-android-620x388.jpg')";
 greeting.textContent="Good Evening";
 document.body.style.color="white";
}
}

//Get Name
function getName()
{
    if(localStorage.getItem('entername')==null)
    {
        entername.textContent='[Enter Name]';
    }
    else{
        entername.textContent=localStorage.getItem('entername');
    }
}

//SetName
function SetName(e)
{
    if(e.type=='keypress')
    {
        //Makesure enter is pressed
        if(e.which==13 || e.keyCode==13)
        {
            localStorage.setItem('entername',e.target.innerHTML);
            entername.blur();
        }
    }
    else{
        localStorage.setItem('entername',e.target.innerHTML);
    }
}
//Get Focus

    function getFocus()
{
    if(localStorage.getItem('focus')==null)
    {
        focus.textContent='[Enter Focus]';
    }
    else{
        focus.textContent=localStorage.getItem('focus');
    }
}

//SetFocus
function SetFocus(e)
{
    if(e.type=='keypress')
    {
        //Makesure enter is pressed
        if(e.which==13 || e.keyCode==13)
        {
            localStorage.setItem('focus',e.target.innerHTML);
            focus.blur();
        }
    }
    else{
        localStorage.setItem('focus',e.target.innerHTML);
    }
}
entername.addEventListener('keypress',SetName);
entername.addEventListener('blur',SetName);
focus.addEventListener('keypress',SetFocus);
focus.addEventListener('blur',SetFocus);

//Run 
showTime();
setBgGreet();
getName();
getFocus();
