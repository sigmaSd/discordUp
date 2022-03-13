"use strict";
window.addEventListener("load", main);
function DOMRegex(regex, elements) {
    var output = [];
    elements.forEach(function (node) {
        if (regex.test(node.className)) {
            output.push(node);
        }
    });
    return output;
}
function main() {
    var f = function () {
        var allElements = document.querySelectorAll('*');
        if (DOMRegex(/sidebar/, allElements).length === 0) {
            setTimeout(f, 3000);
            return;
        }
        var sidebar = DOMRegex(/sidebar/, allElements)[0];
        var lBtn = document.createElement("button");
        lBtn.innerText = "L";
        lBtn.addEventListener("click", function () {
            var vis = sidebar.style.visibility;
            if (!vis) {
                sidebar.style.visibility = "collapse";
            }
            else {
                sidebar.style.visibility = "";
            }
        });
        lBtn.style.position = "absolute";
        lBtn.style.top = "0px";
        lBtn.style.left = "0px";
        document.body.appendChild(lBtn);
    };
    f();
}
