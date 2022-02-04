let currentNum = [0,0];
let operateSwitch = 0;
let numChoice = 0;

function newNum(num) {
        {
            if (currentNum[numChoice] === 0) {
                currentNum[numChoice] = num;
            } else {
                currentNum[numChoice] = "" + currentNum[numChoice] + num;
            }
            document.getElementById("output").innerHTML = currentNum[numChoice];
        }
}

function clearNum() {
    currentNum[0] = 0;
    currentNum[1] = 0;
    numChoice = 0;
    operateSwitch = 0;
    document.getElementById("output").innerHTML = currentNum[numChoice];
    resetColor()
}

function Percent() {
    {
        currentNum[numChoice] /= 100;
        document.getElementById("output").innerHTML = currentNum[numChoice];
    }
}

function Operate(choice) {
    if (operateSwitch !== 0) {
        Equals()
    }
    if (choice === '+')
    {
        document.getElementById("plus").style.backgroundColor = 'lightseagreen';
        document.getElementById("plus").style.color = 'black';
        operateSwitch = 1;
        numChoice = 1;
    }

    if (choice === '/')
    {
        document.getElementById("divide").style.backgroundColor = 'lightseagreen';
        document.getElementById("divide").style.color = 'black';
        operateSwitch = 2;
        numChoice = 1;
    }

    if (choice === 'x')
    {
        document.getElementById("multiply").style.backgroundColor = 'lightseagreen';
        document.getElementById("multiply").style.color = 'black';
        operateSwitch = 3;
        numChoice = 1;
    }

    if (choice === '-')
    {
        document.getElementById("minus").style.backgroundColor = 'lightseagreen';
        document.getElementById("minus").style.color = 'black';
        operateSwitch = 4;
        numChoice = 1;
    }
}

function Equals() {
    resetColor()
    if (operateSwitch === 1) {
        numChoice = 0;
        currentNum[0] += currentNum[1];
        document.getElementById("output").innerHTML = currentNum[0];
    }
    if (operateSwitch === 2) {
        numChoice = 0;
        currentNum[0] /= currentNum[1];
        document.getElementById("output").innerHTML = currentNum[0];
    }
    if (operateSwitch === 3) {
        numChoice = 0;
        currentNum[0] *= currentNum[1];
        document.getElementById("output").innerHTML = currentNum[0];
    }
    if (operateSwitch === 4) {
        numChoice = 0;
        currentNum[0] -= currentNum[1];
        document.getElementById("output").innerHTML = currentNum[0];
    }
    currentNum[1] = 0;
    operateSwitch = 0;
}

function resetColor() {
    document.getElementById("plus").style.backgroundColor = 'orange';
    document.getElementById("plus").style.color = 'black';
    document.getElementById("minus").style.backgroundColor = 'orange';
    document.getElementById("minus").style.color = 'black';
    document.getElementById("multiply").style.backgroundColor = 'orange';
    document.getElementById("multiply").style.color = 'black';
    document.getElementById("divide").style.backgroundColor = 'orange';
    document.getElementById("divide").style.color = 'black';
}

function Zero() {
    currentNum[numChoice] = currentNum[numChoice] + "0";
    currentNum[numChoice] = Number(currentNum[numChoice]);
    document.getElementById("output").innerHTML = currentNum[numChoice];
}