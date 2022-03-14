window.addEventListener("load", main);


function lbtn(sidebar: HTMLDivElement) {
    const btn = document.createElement("button");
    btn.innerText = "L";
    btn.addEventListener("click", () => {
        const vis = sidebar.style.visibility
        if (!vis) {
            sidebar.style.visibility = "collapse"
        } else {
            sidebar.style.visibility = ""
        }
    });
    btn.style.position = "absolute"
    btn.style.top = "0px"
    btn.style.left = "0px"
    return btn
}
function rbtn() {
    const btn = document.createElement("button");
    btn.innerText = "R";
    btn.addEventListener("click", () => {
        // Need to search the page on each click
        // because the sidebar is recreated on some situations (like switching discord server)
        const membersbar = document.querySelector("aside[class^=membersWrap]")!.parentNode as HTMLDivElement
        const vis = membersbar.style.visibility
        if (!vis) {
            membersbar.style.visibility = "collapse"
        } else {
            membersbar.style.visibility = ""
        }
    });
    btn.style.position = "absolute"
    btn.style.top = "0px"
    btn.style.left = "10px"
    return btn
}

function main() {
    const f = () => {
        const sidebar = document.querySelector("div[class^=sidebar]")
        if (sidebar === null) {
            setTimeout(f, 3000);
            return
        }
        // sidebar doesn't change during the course of the page
        document.body.appendChild(lbtn(sidebar as HTMLDivElement))
        document.body.appendChild(rbtn())
    }
    f()
}
