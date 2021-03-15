let questions=[
{
id:1,
question:"Which of these is not a core data type?",
answer:"Class",
options:[
"Lists",
"Dictionary",
"Class",
"Tuples"
]
},
{
id:2,
question:"An optical input device that interprets pencil marks on paper media is?",
answer:"OMR",
options:[
"OMR",
"Magnetic tape",
"Punch Card Reader",
"None"
]
},
{
	id:3,
question:"A modern digital computer has?",
answer:"All",
options:[
"Extremely high speed",
"Large memory",
"Almost unlimited array",
"All"
]
},
{
	id:4,
question:"Computer memory consists of?",
answer:"ALL",
options:[
"RAM",
"ROM",
"PROM",
"ALL"
]
},
{id:5,
question:"A memory that does not change its contents without external causes is known as?",
answer:"Static memory",
options:[
"Static memory",
"EEPROM",
"RAM",
"Dynamic memory"
]},

];
window.onload=()=>{
	question_popup(0);
}
let question_count=0;
let point=0;
function next()
{
	
let checked_answer=document.querySelector("li.opt.active").innerHTML;

if(checked_answer==questions[question_count].answer)
{
	point+=10;
		sessionStorage.setItem("points",point);
	//console.log(points);
}
if(question_count==questions.length-1)
{

	sessionStorage.setItem("time",`${minutes} minutes and  ${seconds} seconds`);
	clearInterval(t);
	location.href="submission_page.html";
	return;
}
question_count++;
question_popup(question_count);
}

function question_popup(count)
{
	let quest=document.getElementById("questio");
	quest.innerHTML=

	`<h3>Q${question_count+1}.${questions[count].question}</h3>
	 <ul class="optgrp">
	 <li class="opt">${questions[count].options[0]}</li>
	 <li class="opt">${questions[count].options[1]}</li>
	<li class="opt">${questions[count].options[2]}</li>
	<li class="opt">${questions[count].options[3]}</li>
	</ul>`;
	checked();


}
function checked()
{
	let choice=document.querySelectorAll("li.opt");
	for(let i=0;i<choice.length;i++)
	{
		choice[i].onclick=function(){
			for(let j=0;j<choice.length;j++)
			{
				if(choice[j].classList.contains("active"))
				{
					choice[j].classList.remove("active");


				}

			}
			choice[i].classList.add("active");
		}
	}
}
let dt=new Date(new Date().setTime(0));
let time=dt.getTime();
let seconds=Math.floor((time%(100*60))/1000);
let minutes=Math.floor((time%(1000*60*60))/(1000*60));
let timex=0;
let t=setInterval(function(){
	if(seconds<59)
	{
		seconds++;
	}
	else
	{
		minutes++;
		seconds=0;
	}
	let sec_format=seconds<10?`0${seconds}`:`${seconds}`;
	let Min_format=minutes<10?`0${minutes}`:`${minutes}`;
	
document.getElementById("time").innerHTML=`${Min_format}:${sec_format}`;
},1000)