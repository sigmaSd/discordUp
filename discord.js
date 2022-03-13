window.addEventListener("load", main);

function DOMRegex(regex, elements) {
    let output = [];
    for (let i of elements) {
        if (regex.test(i.className)) {
            output.push(i);
        }
    }
    return output;
}

function main() {
    const f = () => {
        const allElements = document.querySelectorAll('*')
        if (DOMRegex(/toolbar/, allElements).length === 0) {
            setTimeout(f, 3000);
            return
        }

        const toolbard = DOMRegex(/toolbar/, allElements)[0]
        const sidebar = DOMRegex(/sidebar/, allElements)[0]
        const membersbar = DOMRegex(/membersWrap/, allElements)[0].parentNode

        const lBtn = document.createElement("button");
        lBtn.innerText = "L";
        lBtn.addEventListener("click", () => {
            const vis = sidebar.style.visibility
            if (!vis) {
                sidebar.style.visibility = "collapse"
            } else {
                sidebar.style.visibility = ""
            }
        });
        const rBtn = document.createElement("button");
        rBtn.innerText = "R";
        rBtn.addEventListener("click", () => {
            const vis = membersbar.style.visibility
            if (!vis) {
                membersbar.style.visibility = "collapse"
            } else {
                membersbar.style.visibility = ""
            }
        });
        toolbard.appendChild(lBtn);
        toolbard.appendChild(rBtn);
    }
    f()
}
