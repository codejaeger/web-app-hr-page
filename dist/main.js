(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };
  
  window.randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  }
  
  var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
  };
  
  var label1 = "Performance";
  
  var color = Chart.helpers.color;
  var config = {
    type: 'radar',
    data: {
      labels: ['O', 'C', 'E', 'A', 'N'],
      datasets: [{
        label: label1,
        fill:true,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        borderColor: window.chartColors.red,
        pointBackgroundColor: window.chartColors.red,
        data: [4,1,3,2,2],
        notes: ["I am pretty happy","I am isolated","none","none","none"]
      }]
    },
    options: {
      legend: {
        position: 'bottom',
      },
    //   title: {
    //     display: true,
    //     text: 'Chart.js Outcome Graph'
    //   },
    elements: {
        line: { 
            tension: 0,
            borderWidth: 3
        }
    },
    scale: {
        ticks: {
            suggestedMin: 0,
            suggestedMax: 5
        }
      },
      tooltips:{
        enabled:false,
        callbacks:{
          label: function(tooltipItem, data){
            var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
            //This will be the tooltip.body
            return datasetLabel + ': ' + tooltipItem.yLabel +': '+ data.datasets[tooltipItem.datasetIndex].notes[tooltipItem.index];
          }
        },
        custom: function(tooltip){
          // Tooltip Element
        var tooltipEl = document.getElementById('chartjs-tooltip');
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = "<table></table>"
          document.body.appendChild(tooltipEl);
        }
        // Hide if no tooltip
        if (tooltip.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }
        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltip.yAlign) {
          tooltipEl.classList.add(tooltip.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }
        function getBody(bodyItem) {
          return bodyItem.lines;
        }
        // Set Text
        if (tooltip.body) {
          var titleLines = tooltip.title || [];
          var bodyLines = tooltip.body.map(getBody);
          var innerHtml = '<thead>';
          titleLines.forEach(function(title) {
            innerHtml += '<tr><th>' + title + '</th></tr>';
          });
          innerHtml += '</thead><tbody>';
          bodyLines.forEach(function(body, i) {
            var colors = tooltip.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
            innerHtml += '<tr><td>' + span + body + '</td></tr>';
          });
          innerHtml += '</tbody>';
          var tableRoot = tooltipEl.querySelector('table');
          tableRoot.innerHTML = innerHtml;
        }
        var position = this._chart.canvas.getBoundingClientRect();
        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.left = position.left + tooltip.caretX + 'px';
        tooltipEl.style.top = position.top + tooltip.caretY + 'px';
        tooltipEl.style.fontFamily = tooltip._fontFamily;
        tooltipEl.style.fontSize = tooltip.fontSize;
        tooltipEl.style.fontStyle = tooltip._fontStyle;
        tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
        }
      }
    }
  };
  window.onload = function() {
    window.myRadar = new Chart(document.getElementById("canvas"), config);
  };
  var colorNames = Object.keys(window.chartColors);
  
},{}],2:[function(require,module,exports){
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
},{"./src/data/questions.json":3,"./src/data/responses.json":4,"fs":5}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
module.exports={
    "responses": [
        {
            "id": "1",
            "comment": "Hello from 1",
            "grade": "1"
        },
        {
            "id": "2",
            "comment": "Hello from 2",
            "grade": "2"
        },
        {
            "id": "3",
            "comment": "Hello from 3",
            "grade": "3"
        },
        {
            "id": "4",
            "comment": "Hello from 4",
            "grade": "4"
        },
        {
            "id": "5",
            "comment": "Hello from 5",
            "grade": "5"
        },
        {
            "id": "6",
            "comment": "",
            "grade": ""
        },
        {
            "id": "7",
            "comment": "",
            "grade": ""
        },
        {
            "id": "8",
            "comment": "",
            "grade": ""
        }
    ]
}
},{}],5:[function(require,module,exports){

},{}]},{},[2,1]);
