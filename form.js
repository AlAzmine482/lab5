window.addEventListener('DOMContentLoaded', function(){
    console.log("Dom loaded")
   jsformstart();
  })
document.getElementById("myForm").style.backgroundColor = "lightblue";
let cookieData = "";
let posttext = document.getElementById("Post")

 function jsformstart() {
    document.getElementById("myForm").style.backgroundColor = "lightblue";
    const saveBttn = document.getElementById('save-button')
    const submitbtn = document.getElementById('submit-form')
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
    /*
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
    */
    calculator.numberButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (calculator.displayBox.value === "ERROR: press C") {
          clearDisplay();
        }
        updateDisplay(button.value);
        if (state.operator === '') {
          state.num1 = state.num1 + button.value;
          let test = "ifdisplay"
          let testeval = eval(state.num1)
          console.log(state.num1 + test)
          console.log(testeval)
        } else {
          state.num2 = state.num2 + button.value;
          let test2 = "elsedisplay"
          console.log(state.num2 + test2)
        }
      });
    });
    const clearDisplay = () => {
      calculator.displayBox.value = '';
      state.num1 = '';
      state.num2 = '';
      state.operator = '';
      state.calculatedResult = null;
    };
   
    calculator.clearButton.addEventListener('click', () => {
      clearDisplay();
    });

    calculator.decimalButton.addEventListener('click', () => {
      if (!calculator.displayBox.value.includes('.')) {
        updateDisplay('.');
        if (state.operator === '') {
          state.num1 += '.';
          
        } else {
          state.num2 += '.';
        }
      }
    });
    
    calculator.addButton.addEventListener('click', () => {
      if (state.operator === '') {
        //state.operator = '+';
        //updateDisplay(state.operator);
      
          state.num1 += '+';
          calculator.displayBox.value = '';
      } else {
          state.num2 += '+';
          calculator.displayBox.value = '';
        }
      
    });

    calculator.divideButton.addEventListener('click', () => {
      if (state.operator ===  '') {
       // state.operator = '/';
        state.num1 += '/';
        calculator.displayBox.value = '';
      }
      else {
        state.num2 += '/';
        calculator.displayBox.value = '';
      }

    });

    calculator.subtractButton.addEventListener('click', () => {
      if (state.operator ===  '') {
        //state.operator = '-';
        state.num1 += '-';
        calculator.displayBox.value = '';
      }
      else {
        state.num2 += '-';
        calculator.displayBox.value = '';
      }

    });
    calculator.multiplyButton.addEventListener('click', () => {
      if (state.operator ===  '') {
        //state.operator = '*';
        state.num1 += '*';
        calculator.displayBox.value = '';
      }
      else {
        state.num2 += '*';
        calculator.displayBox.value = '';
      }

    });
    calculator.equalsButton.addEventListener('click', () => {
      let evaluation = eval(state.num1)
      calculator.displayBox.value = '';
      updateDisplay(evaluation)

    });

    saveBttn.addEventListener('click', (event) => {
      event.preventDefault();
      let result = document.getElementById("result");
      let hoursWorkedLabel = document.getElementById("hours-worked-label");
      const hoursWorkedResult = document.getElementById("hoursWorkedResult");
      let value = result.value;
  
      if (value === "" || isNaN(value)) {
        //console.error("Invalid number of hours worked");
        hoursWorkedResult.innerHTML = "Invalid number of hours worked ";
        hoursWorkedResult.style.color = "red";
        //document.getElementById("hours-error").style.color = "red";
      } else {
          //console.log("Hours Worked This Week:");
          hoursWorkedResult.innerHTML = hoursWorkedResult.innerHTML+ value;
          //document.getElementById("hours-error").style.color = "black";
          hoursWorkedLabel.style.color = "black";
       }
    });

    submitbtn.addEventListener('click', (event) => { 
      //event.preventDefault();
      let posttext = document.getElementById("Post").value;
      //let result = document.getElementById("result");
      //let name = document.getElementById("Name").innerText;
      //let id = document.getElementById("csunid").innerText;
      //let majorval = document.getElementById("major").innerText;
      let name = "Al Azmine";
      let id = "109945548";
      let major = "Computer Science";
      const date = new Date();
      let taskName = document.getElementById("inputname").innerText;
      //console.log(name);
      //console.log(id);
      //console.log(major);
      //if (post.trim() === "") {
      //  alert("Post is empty")
      //  return;
      //}
      //if (taskName === "" || taskDate === "" || posttext === "") {
        //alert("Please fill in all required fields.");
        //event.preventDefault();
        
      //}
      //localStorage.setItem("Name:", name);
      //localStorage.setItem("ID:", id);
      //localStorage.setItem("Major", major);
      //localStorage.setItem("Taskname:", taskName);
      //localStorage.setItem("TaskDate:", date);
      //localStorage.setItem("Posttext", posttext)


     
     //window.location.href = "blog.php";
   


    });


 }

 

 function nameup() {
    const nameinput = document.getElementById("inputname");
    const nameerr = document.getElementById("name-error");
    let x = document.getElementById("inputname"); 
   // x.value = x.value.toUpperCase();
   x.value = x.value.toLowerCase().replace(/\b\w/g, function(c) {
     return c.toUpperCase();
     
         
     });
    const nameStr = nameinput.value;
    const nameformat = /^[A-Za-z]+$/;
    if (nameformat.test(nameStr)) {
        nameerr.innerText = "";
        nameinput.style.borderColor = "";
    } else {
        nameerr.innerText = "Please enter only letters";
        nameinput.style.borderColor = "red";
    }
 
     
 }

 function datecheck() {
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

}

