const data = require('./src/data/questions.json')

if (!data || data.questions.length==0)
data = {"questions": [{
    "video": "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
    "id": "1"
}]}

const questionBank = data.questions;

var questionBar = document.getElementById("carousel");
var question = document.getElementById("videoTabs");
var questionBox = document.getElementById("questionBox");
console.log(questionBar, question)
questionBox.innerText =  questionBank[0].question;
for (var i = 0; i < questionBank.length; i++)
{
    console.log(questionBank.length, questionBank[i])
    
    var active = " class='active'";

    questionBar.innerHTML += `
    <div class="item"">
        <li${i==0?active:''}><a data-toggle="tab" href="#menu-${questionBank[i].id}" id="tag-${questionBank[i].id}" class="a2">${i+1}</a></li>
    </div>`

    active = "in active";
    
    question.innerHTML += `
    <div class="tab-pane fade ${i==0?active:''}" id="menu-${questionBank[i].id}">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="videoDisplay embed-responsive-item"
                src="${questionBank[i].video}" allowfullscreen>
            </iframe>
        </div>
    </div>`
}
