function resultOutput(res) {
    if (res === "") {
        return "0";
    }
    if (res.length > 1 && res[0] === "0") {
        console.log("origin", res);
        res = res.slice(1, res.length);
        console.log(res);
    }
    return res;
}

function delOutput(res) {
    if (res === "" || res.length === 1) {
        return "0";
    }

    if (res[res.length - 1] !== " ") {
        return res.slice(0, res.length - 1);
    }
    return res.slice(0, res.length - 3);
}

function operationOutput(res, operation) {
    if (res[res.length - 1] === " ") {
        return res.slice(0, res.length - 3) + operation;
    }
    return res + operation;
}

function ansOutput(res) {
    if (res.includes("x")) {
        res = res.replaceAll("x", "*");
    }
    return eval(res).toString();
}
function initializeCalculator() {
    let output = "";
    const result = document.querySelector("#output");
    const nums = document.querySelectorAll(".num");
    const del = document.querySelector("#del");

    const add = document.querySelector("#plus");
    const minus = document.querySelector("#minus");
    const divide = document.querySelector("#divide");
    const multiply = document.querySelector("#multiply");

    const reset = document.querySelector("#reset");
    const equal = document.querySelector("#equal");

    for (let num of nums) {
        num.addEventListener("click", () => {
            output += num.innerText;
            output = resultOutput(output);
            result.innerText = output;
        });
    }
    del.addEventListener("click", () => {
        //output = output.slice(0, output.length - 1);
        output = delOutput(output);
        output = resultOutput(output);
        result.innerText = output;
    });

    add.addEventListener("click", () => {
        output = operationOutput(output, " + ");
        result.innerHTML = output;
    });

    minus.addEventListener("click", () => {
        output = operationOutput(output, " - ");
        result.innerHTML = output;
    });

    divide.addEventListener("click", () => {
        output = operationOutput(output, " / ");
        result.innerHTML = output;
    });

    multiply.addEventListener("click", () => {
        output = operationOutput(output, " x ");
        result.innerHTML = output;
    });

    reset.addEventListener("click", () => {
        output = "0";
        result.innerText = output;
    });

    equal.addEventListener("click", () => {
        output = ansOutput(output);
        result.innerText = output;
        output = "0";
    });
}
document.addEventListener("DOMContentLoaded", initializeCalculator);
