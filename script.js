function resultOutput(res) {
    if (res === "") {
        return "0";
    }
    if (res.length > 1 && res[0] === "0") {
        res = res.slice(1, res.length);
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

function dotOutput(res) {
    let dot = false;
    let i = res.length - 1;
    while (i > -1 && res[i] !== " ") {
        if (res[i] === ".") {
            dot = true;
            break;
        }
        i--;
    }
    if (dot) {
        return res;
    }

    return res + ".";
}

function ansOutput(res) {
    if (res.includes("x")) {
        res = res.replaceAll("x", "*");
    }
    let ans = 0;
    try {
        ans = eval(res);
        if (ans % 1 === 0) {
            return ans.toString();
        }
        ans = ans.toString();
        if (ans.length - ans.indexOf(".") - 1 > 2) {
            ans = Number(ans).toFixed(3).toString();
        }
        return ans;
    } catch (e) {
        return "Error";
    }
    return ans;
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
    const dot = document.querySelector("#dot");

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
        result.innerHTML = resultOutput(output);
    });

    minus.addEventListener("click", () => {
        output = operationOutput(output, " - ");
        result.innerHTML = resultOutput(output);
    });

    divide.addEventListener("click", () => {
        output = operationOutput(output, " / ");
        result.innerHTML = resultOutput(output);
    });

    multiply.addEventListener("click", () => {
        output = operationOutput(output, " x ");
        result.innerHTML = resultOutput(output);
    });

    reset.addEventListener("click", () => {
        output = "0";
        result.innerText = output;
        output = "";
    });

    equal.addEventListener("click", () => {
        output = ansOutput(output);
        result.innerText = output;
        output = "0";
    });

    dot.addEventListener("click", () => {
        output = dotOutput(output);
        result.innerText = output;
    });
}
document.addEventListener("DOMContentLoaded", initializeCalculator);
