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
$(' .owl_1').owlCarousel({
    loop:false,
    margin:2, 
    responsiveClass:true,
    slideSpeed: 400,
    paginationSpeed: 400,
    responsive:{
        0:{
            items:5,
            nav:true,
            loop:false
        },
    }
})

var responses = require('../data/responses.json').responses;
var questionBank = require('../data/questions.json').questions;
var fs = require('fs');

$(document).ready(function(){
    var $owl = $('.owl-carousel');
    var li =  $(".owl-item li ");
    const saveState = (id) => {
        var comment = document.getElementById("commentText");
        var grade = $("input[type='radio'][name='grading']:checked").val();
        responses[id].comment = comment.value;
        responses[id].grade = grade;
        // console.log(comment.value, grade)
    }

    const showResults = () => {
        for (var i=0; i<questionBank.length; i++)
        {
            responses[i]['question'] = questionBank[i].question;
        }
        console.log(responses);
        window.alert("Final response printed to console!!")
    }

    $(".owl-item li").click(function(){
    li.removeClass('active');
    // console.log($(this).children(), responses);
    tempObj = {}
    $(this).children().each(function() {
        $.each(this.attributes, function() {
          if(this.specified) {
            tempObj[this.name] = this.value;
          }
        });
    });
    var id = parseInt(tempObj.href.split("-")[1], 10)-1;
    // console.log(id)
    var comment = document.getElementById("commentText");
    comment.value = responses[id].comment;
    comment.innerText = comment.value;
    if (responses[id].grade)
    {
        var grade = document.getElementById("grade_"+responses[id].grade).checked=true;
        // console.log(grade);
    }
    else
    {
        for (var i=1; i<=5; i++)
        {
            document.getElementById("grade_"+String(i)).checked = false;
        }
    }
    var saveButton = document.getElementById("save");
    if (id==responses.length-1)
    {
        saveButton.innerText = "Submit";
        saveButton.onclick = () => {
            saveState(id);
            showResults();
        }
    }
    else
    {
        saveButton.innerText = "Save";
        saveButton.onclick = () => {
            saveState(id);
            document.getElementById("tag-"+String(id+2)).click();
        }
    }
    var questionBox = document.getElementById("questionBox");
    questionBox.innerText =  questionBank[id].question;
    });
    document.getElementById('tag-1').click();
});