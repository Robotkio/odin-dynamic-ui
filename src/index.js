import "./css/style.css";

const CLASS_NAME = "dropdown-menu"
const HIDDEN_CLASS = "display-none"
const DISPLAY_CLASS = "display-block"

init()

function init() {
    addMenuShowHideFunctionClassless()
    addOnHoverOnOutFunction()

    const menus = document.querySelectorAll(`.${CLASS_NAME}`)
    for (const menu of menus) {
        const elements = menu.children
        for (const element of elements) {
            hideAllDecendants(element)
        }
    }
} 

function addMenuShowHideFunctionClassless() {
    const menus = document.querySelectorAll(`.${CLASS_NAME} ul, .${CLASS_NAME}`)
    menus.forEach((menu) => {
        menu.addEventListener('click', (event) => {
            displayAllChildren(event.target.nextElementSibling, 'block')
        })
    })
}

function addOnHoverOnOutFunction() {
    const menus = document.querySelectorAll(`.${CLASS_NAME}`)
    menus.forEach((menu) => {
        menu.addEventListener("mouseenter", onMouseOver(menu))
        menu.addEventListener("mouseleave", onMouseOut(menu))
    })
}

function onMouseOver(element) {
    return () => {
        element.style['background-color'] = '#707070'
    }
}

function onMouseOut(element) {
    return () => {
        element.style['background-color'] = null
        const topEelements = element.children
        let i = 0
        while(topEelements[i]) {
            hideAllDecendants(topEelements[i++])
        }
    }
}

function displayAllChildren(element, displayStyle) {
    console.log(element.children)
    const children = element.children
    for (const child of children) {
        console.log(child)
        child.style.display = displayStyle
    }
}

function hideAllDecendants(element) {
    const children = element.querySelectorAll('ul')
    console.log(children)
    let i = 0;
    while(children[i]) {
        children[i++].style.display = 'none'
    }
}