let fanIsOn = false;
let a=document.getElementById('img');
let st=document.getElementById('status');
function myFanon()
{
	a.style.animationDuration = '3s';
	st.innerHTML = "ON";
	fanIsOn = true;
}	
function myFanoff()
{
	a.style.animationDuration = '0s';
	st.innerHTML = "OFF";
	fanIsOn = false;
}
function myFan1()
{
	if(fanIsOn){
		a.style.animationDuration = "1s";
		st.innerHTML = "1";
	} else st.innerHTML = "Fan is Off, turn it ON";		
}	
function myFan2()
{
	if(fanIsOn){
		a.style.animationDuration = ".5s";
		st.innerHTML = "2";
	} else st.innerHTML = "Fan is Off, turn it ON";		
}		
function myFan3()
{
	if(fanIsOn){
		a.style.animationDuration = ".1s";
		st.innerHTML = "3";
	} else st.innerHTML = "Fan is Off, turn it ON";		
}