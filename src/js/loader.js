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
