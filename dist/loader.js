(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./src/data/questions.json":2}],2:[function(require,module,exports){
module.exports={
    "questions": [
        {
            "id": "1",
            "question": "Tell me about yourself.",
            "video": "https://www.youtube.com/embed/Y3OxgBc0OJw"
        },
        {
            "id": "2",
            "question": "Why do you want to join this company?",
            "video": "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        },
        {
            "id": "3",
            "question": "Why do you want to join this company?",
            "video": "https://www.youtube.com/embed/kiyi-C7NQrQ"
        },
        {
            "id": "4",
            "question": "Why do you want to join this company?",
            "video": "https://www.youtube.com/embed/1BVgpX4w0Wk"
        },
        {
            "id": "5",
            "question": "Why do you want to join this company?",
            "video": "https://www.youtube.com/embed/kiyi-C7NQrQ"
        },
        {
            "id": "6",
            "question": "Why do you want to join this company?",
            "video": ""
        },
        {
            "id": "7",
            "question": "Why do you want to join this company?",
            "video": ""
        },
        {
            "id": "8",
            "question": "Why do you want to join this company?",
            "video": ""
        }
    ]
}
},{}]},{},[1]);
