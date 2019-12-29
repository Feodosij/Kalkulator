var a, b, c;

var action = '';



function getValue(id) {

    var res = document.getElementById(id).value - '';

    if (!isNaN(res))

        return res;

}



function PutNum(val) {

    document.getElementById("screen").value = (document.getElementById("screen").value + val) - 0;

}



function add() {

    a = getValue("screen");

    document.getElementById("screen").value = 0;

    action = "+";

}



function sub() {

    a = getValue("screen");

    document.getElementById("screen").value = 0;

    action = "-";

}



function mult() {

    a = getValue("screen");

    document.getElementById("screen").value = 0;

    action = "*";

}



function div() {

    a = getValue("screen");

    document.getElementById("screen").value = 0;

    action = "/";

}



function clr() {

    document.getElementById("screen").value = 0;

}

function calculate() {

    b = getValue("screen");

    switch (action) {

        case "+":

            c = a + b;

            break;

        case "-":

            c = a - b;

            break;

        case "*":

            c = a * b;

            break;

        case "/":

            if (b == 0) {

                alert('Division durch Null kann nicht sein!');

            } else {

                c = a / b;

            }

            break;
    }

    document.getElementById("screen").value = c;

}


window.onload = function () {



    for (var i = 0; i < 10; i++) {

        (function (val) {

            document.getElementById("btn_" + val).onclick = function () {

                PutNum(val);

            }

        })(i);

    }

    document.getElementById("add").addEventListener("click", add);

    document.getElementById("calculate").addEventListener("click", calculate);

    document.getElementById("sub").addEventListener("click", sub);

    document.getElementById("mult").addEventListener("click", mult);

    document.getElementById("div").addEventListener("click", div);

    document.getElementById("clr").addEventListener("click", clr);

}