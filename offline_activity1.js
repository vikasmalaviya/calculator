//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num-- ;
            document.frmCalc.txtNumber.value = num;
        }
}

function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
        }
}

function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.sqrt(num);
            document.frmCalc.txtNumber.value = num;
        }
}

function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.floor(num);
            document.frmCalc.txtNumber.value = num;
        }
}

function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.round(num);
            document.frmCalc.txtNumber.value = num;
        }
}

function pow2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = num ** 2;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

function sub() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Sub";
        }
}   

function mul() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Mul";
        }
}

function division() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Div";
        }
}

function pow() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Pow";
        }
}


//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            
            else if (calc == "Sub"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }

            else if (calc == "Mul"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }

            else if (calc == "Pow"){
                var total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;
            }

            else if (calc == "Div"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }

            else if (calc == "Pow"){
                var total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;
            }

}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}