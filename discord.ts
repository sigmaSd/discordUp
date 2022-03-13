window.addEventListener("load", main);

function DOMRegex(regex: RegExp, elements: NodeListOf<Element>) {
    const output: Element[] = [];
    elements.forEach(node => {
        if (regex.test(node.className)) {
            output.push(node);
        }
    })
    return output;
}

function main() {
    const f = () => {
        const allElements = document.querySelectorAll('*')
        if (DOMRegex(/sidebar/, allElements).length === 0) {
            setTimeout(f, 3000);
            return
        }

        const sidebar = DOMRegex(/sidebar/, allElements)[0] as HTMLDivElement

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
        lBtn.style.position = "absolute"
        lBtn.style.top = "0px"
        lBtn.style.left = "0px"
        document.body.appendChild(lBtn)
    }
    f()
}
