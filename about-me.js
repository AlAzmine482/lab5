//document.writeln("<h1>test</h1>")


var form = document.getElementById("myform");
var namecheck = document.getElementById("inputname");
//var namechck  = document.getElementById("inputname").pattern = "{[A-Za-z]}"
var result = document.getElementById("result");
let inputstring = "";
var num1 = "";
var num2 = "";
numtest = "";
var operator = "";
document.getElementById("myForm").style.backgroundColor = "lightblue";
window.addEventListener('DomcontentLoaded', function(){
  console.log("Dom loaded")
  submitButton();
})

function submitButton(event){
    event.preventDefault();
    let y = document.getElementById("inputname").value;
    let z = document.getElementById("date").value;
    let nameformat = /ˆ[A-Z][a-z](\s+[A-Z][a-z])*$/;
    let dateformat = /ˆ((0[1-9]|1[0-2])[-/\\]\d{1,2}[-/\\]\d{4})|([A-ZA-Z]+\s\d{1,2},\s\d{4})$/;


    if(nameformat.test(y)) {
       alert("Error: Invalid Name format(Onlt letters please)");
    }
    if(dateformat.test(z)) {
        alert("Error: Invalid Date format. Format must be: [MM-DD-YYYY, MM/DD/YYYY, MM\DD\YYYY, Month Day, Year ]");
    }
    //const namevar = document.getElementById("inputname");
    //const date = document.getElementById("date");
let namejs = document.getElementById("Name").innerHTML;
let namejstrim = document.getElementById("Name").textContent.trim();
let major = document.getElementById("major").innerHTML;
let studentId = document.getElementById("csunid").innerHTML;
let hoursWorked = document.getElementById("hoursWorkedResult").textContent.trim();
//let currentResult = document.getElementById("result").value;
let paragraph = document.getElementById("para").nextElementSibling.textContent.trim();
const date = new Date();


// Create the message to display in the alert dialog
let message = "Form submission successful.\n\n" +
              "Name: " + namejstrim + "\n" +
              "Major: " + major + "\n" +
              "Student ID: " + studentId + "\n" +
              "Hours worked this week: " + hoursWorked + "\n" +
              "Current result: " + result.value + "\n" +
              "Task Date: " + date + "\n" +
              "Paragraph: " + paragraph;
              

// Show the message in an alert dialog
    alert(message);

    //return confirm("")
  
}


function saveButton(event) {
    event.preventDefault();
    let result = document.getElementById("result");
    let hoursWorkedLabel = document.getElementById("hoursWorkedLabel");
    const hoursWorkedResult = document.getElementById("hoursWorkedResult");
    let value = result.value;
    
    if (value === "" || isNaN(value)) {
      //console.error("Invalid number of hours worked");
      hoursWorkedResult.innerHTML = "Invalid number of hours worked ";
      hoursWorkedResult.style.color = "red";
      //document.getElementById("hours-error").style.color = "red";
    } else {
      //console.log("Hours Worked This Week:");
      hoursWorkedResult.innerHTML = value;
      //document.getElementById("hours-error").style.color = "black";
      hoursWorkedLabel.style.color = "black";
    }
  }
  


// get the name input field
//var nameInput = document.getElementById("inputname");




//name.addEventListener("")
//name.addEventListener("Submit", 
//function()
//{
//document.getElementById("test").innerHTML =
//test =  document.getElementById("inputname").form.id;
//test.fromCharCo
//},false)

//namecheck.addEventListener("input", function(){
//    var input = namecheck.value;
//    input = input.replace(/[^a-zA-Z ]/g, "");
//    var words = input.split(" ");
//    words = words.map(function(word) {
//        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//    });
    // join the words back into a string and set the input value
//    namecheck.value = words.join(" ");
//    var firstletter = input.charAt(0).toUpperCase();
//    var res = input.slice(1).toLowerCase();
 //   namecheck.value = firstletter + res;
//});
const nameinput = document.getElementById("inputname")
//const nameformat = /^[A-Za-z]+$/;
const nameerr = document.getElementById("name-error");
function nameup() {
   let x = document.getElementById("inputname"); 
  // x.value = x.value.toUpperCase();
  x.value = x.value.toLowerCase().replace(/\b\w/g, function(c) {
    return c.toUpperCase();
        

});

    
}



nameinput.addEventListener("input", function() {
    const nameStr = nameinput.value;
    const nameformat = /^[A-Za-z]+$/;
    if (nameformat.test(nameStr)) {
        nameerr.innerText = "";
        nameinput.style.borderColor = "";
    } else {
        nameerr.innerText = "Please enter only letters";
        nameinput.style.borderColor = "red";
    }
});
 //function datecheck() {
//    const dateInput = document.getElementById("date");
//    const dateRegex = /^(0[1-9]|1[0-2])([-\/\\])(0[1-9]|[1-2][0-9]|3[0-1])\2\d{4}$|^([A-Za-z]+) (\d{1,2}), (\d{4})$/;
  
//    if (dateRegex.test(dateInput.value)) {
      // Clear error message if input is valid
//      document.getElementById("date-error").textContent = "";
//    } else {
      // Display error message if input is invalid
//      document.getElementById("date-error").textContent = "Please enter a valid date in the format: MM-DD-YYYY, MM/DD/YYYY, MM\\DD\\YYYY or Month Day, Year (e.g. January 1, 2000)";
 //   }
//  }
  

const dateField = document.getElementById("date");
const errorMsg = document.getElementById("date-error");

dateField.addEventListener("input", function() {
    const dateStr = dateField.value;
    const dateFormat = /^(\d{1,2})([-/\\])(\d{1,2})\2(\d{4})$|(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}$/;
    
    if (dateFormat.test(dateStr)) {
        errorMsg.innerText = "";
        dateField.style.borderColor = "";
    } else {
        errorMsg.innerText = "Please enter a valid date in the format: MM-DD-YYYY, MM/DD/YYYY, MM\\DD\\YYYY or Month Day, Year (e.g. January 1, 2000)";
        dateField.style.borderColor = "red";
    }
    const year = dateStr.match(dateFormat)[4];
    if (year % 4 == 0) {
        errorMsg.innerText =  "It is a leap year";
    }
    else {
        errorMsg.innerText = "It is not a leap year";
    }

});

//all or single 
const calculator = {
  displayBox: document.querySelector('.display-box'),
  clearButton: document.querySelector('[data-action="clear"]'),
  addButton: document.querySelector('[data-action="add"]'),
  subtractButton: document.querySelector('[data-action="subtract"]'),
  multiplyButton: document.querySelector('[data-action="multiply"]'),
  divideButton: document.querySelector('[data-action="divide"]'),
  equalsButton: document.querySelector('[data-action="calculate"]'),
  decimalButton: document.querySelector('[value="."]')
};

let state = {
  num1: '',
  num2: '',
  operator: '',
  calculatedResult: null
};

const updateDisplay = (value) => {
  calculator.displayBox.value = calculator.displayBox.value + value;
};


calculator.numberButtons = document.querySelectorAll('.number-button');
calculator.numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    updateDisplay(button.value);
    if (state.operator === '') {
      state.num1 += button.value;
    } else {
      state.num2 += button.value;
    }
  });
});

const clearDisplay = () => {
  calculator.displayBox.value = '';
};

calculator.clearButton.addEventListener('click', () => {
  state = {
    num1: '',
    num2: '',
    operator: '',
    calculatedResult: null
  };
  clearDisplay();
});

const divide = () => {
  state.operator = '/';
  clearDisplay();
};

const subtract = () => {
  state.operator = '-';
  clearDisplay();
};

const add = () => {
  state.operator = '+';
  clearDisplay();
};

const multiply = () => {
  state.operator = '*';
  clearDisplay();
};

calculator.divideButton.addEventListener('click', divide);
calculator.subtractButton.addEventListener('click', subtract);
calculator.addButton.addEventListener('click', add);
calculator.multiplyButton.addEventListener('click', multiply);

const calculateResult = () => {
  if (state.num2 === '' || state.operator === '') {
    return;
  }
  const num1 = parseFloat(state.num1);
  const num2 = parseFloat(state.num2);
  let finalResult;
  switch (state.operator) {
    case '/':
      if (num2 === 0) {
        finalResult = 'Error';
      } else {
        finalResult = num1 / num2;
      }
      break;
    case '-':
      finalResult = num1 - num2;
      break;
    case '+':
      finalResult = num1 + num2;
      break;
    case '*':
      finalResult = num1 * num2;
      break;
  }
  calculator.displayBox.value = finalResult.toString();
  state.calculatedResult = finalResult;
  state.num1 = finalResult.toString();
  state.num2 = '';
  state.operator = '';
};

calculator.equalsButton.addEventListener('click', calculateResult);

$(document).ready(function() {
  $.ajax({
    url: "about-me.php",
    type: "GET",
    dataType: "html",
    success: function(data) {
      $("#para").html(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error: " + errorThrown);
    }
  });

  $.ajax({
    type: "POST",
    url: "about-me.php",
    data: {
      name: $("#Name").text(),
      csunid: $("#csunid").text(),
      major: $("#major").text(),
      title: $("#para").attr("name"),
      content: $("#para-content").attr("name")
    },
    success: function(response) {
      console.log(response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error: " + errorThrown);
    }
  });
  
});


