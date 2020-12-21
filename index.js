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

var responses = require('./src/data/responses.json').responses;
var questionBank = require('./src/data/questions.json').questions;
var fs = require('fs');

$(document).ready(function(){
    var $owl = $('.owl-carousel');
    // console.log($owl)
    // $owl.children().each( function( index ) {
    //     $(this).attr( 'data-position', index );
    // });
    var li =  $(".owl-item li ");
    // $(document).on('click', '.owl-item li', function() {
    //     li.removeClass('active');
    //     console.log($(this));
    // });

    const saveState = (id) => {
        var comment = document.getElementById("commentText");
        var grade = $("input[type='radio'][name='grading']:checked").val();
        responses[id].comment = comment.value;
        responses[id].grade = grade;
        console.log(comment.value, grade)
    }

    const showResults = () => {
        var dictstring = JSON.stringify(responses);
        console.log(dictstring)
    }

    $(".owl-item li").click(function(){
    li.removeClass('active');
    console.log($(this).children(), responses);
    tempObj = {}
    $(this).children().each(function() {
        $.each(this.attributes, function() {
          if(this.specified) {
            tempObj[this.name] = this.value;
          }
        });
    });
    var id = parseInt(tempObj.href.split("-")[1], 10)-1;
    console.log(id)
    var comment = document.getElementById("commentText");
    comment.value = responses[id].comment;
    comment.innerText = comment.value;
    if (responses[id].grade)
    {
        var grade = document.getElementById("grade_"+responses[id].grade);
        grade.setAttribute('checked', true);
        grade.click();
        console.log(grade);
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