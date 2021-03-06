/**
* MIT License
*
* Copyright (c) 2020 Debabrata Mandal
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
            "question": "What will you do after joining the company?",
            "video": "https://www.youtube.com/embed/kiyi-C7NQrQ"
        },
        {
            "id": "4",
            "question": "Why do you want to join this company?",
            "video": "https://www.youtube.com/embed/EngW7tLk6R8"
        },
        {
            "id": "5",
            "question": "Describe who you are or Tell me about your background?",
            "video": "https://www.youtube.com/embed/kiyi-C7NQrQ"
        },
        {
            "id": "6",
            "question": "What are your strengths and weaknesses?",
            "video": "https://www.youtube.com/embed/PjfP2tmjtQM"
        },
        {
            "id": "7",
            "question": "You have changed jobs/jumped ship too many times already, why so?",
            "video": "https://www.youtube.com/embed/Z-fV2lGKnnU"
        },
        {
            "id": "8",
            "question": "What are your strong points? or What are your strengths?",
            "video": "https://www.youtube.com/embed/zXR_4li9ZnA"
        }
    ]
}
},{}],2:[function(require,module,exports){
const data = require('../data/questions.json')

if (!data || data.questions.length==0)
data = {"questions": [{
    "video": "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
    "id": "1"
}]}

const questionBank = data.questions;

var questionBar = document.getElementById("carousel");
var question = document.getElementById("videoTabs");
var questionBox = document.getElementById("questionBox");
// console.log(questionBar, question)
questionBox.innerText =  questionBank[0].question;
for (var i = 0; i < questionBank.length; i++)
{
    // console.log(questionBank.length, questionBank[i])
    
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

},{"../data/questions.json":1}]},{},[2]);
