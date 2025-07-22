import "./css/style.css";

const CLASS_NAME = "dropdown-menu"
const HIDDEN_CLASS = "display-none"
const DISPLAY_CLASS = "display-block"

addMenuFunction()

function addMenuFunction() {
    const menus = document.querySelectorAll(`.${CLASS_NAME} ul`)
    menus.forEach((menu) => {
        menu.previousElementSibling.addEventListener("click", (menu) => {
            let next = menu.target;
            while(next = next.nextElementSibling) {
                if (next.classList.contains(HIDDEN_CLASS)) {
                    next.classList.remove(HIDDEN_CLASS)
                    next.classList.add(DISPLAY_CLASS)
                } else {
                    next.classList.remove(DISPLAY_CLASS)
                    next.classList.add(HIDDEN_CLASS)
                }
            }
        })
    })
}