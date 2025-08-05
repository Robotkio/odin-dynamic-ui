import "./css/style.css";

const CLASS_NAME = "dropdown-menu"
const SUBMENU_LINK_CLASS = "dropdown-menu-submenu-link"

init()

function init() {
    const links = getAllMenuLinks()
    addEventListenerToEachElement(links, "click", toggleNextSibling)
} 

/**
 * Gets an array of all menu link header elements. A menu link header element is each element that preceeds a UL within each dropdown-menu element. 
 * 
 * @returns {Array} With nodes inside.
 */
function getAllMenuLinks() {
    const menus = document.querySelectorAll(`.${CLASS_NAME} ul`)
    const links = new Array()
    let i = 0
    while(menus[i]) {
        const prevSib = menus[i++].previousElementSibling
        if (prevSib) (
            links.push(prevSib)
        )
    }
    return links
}

/**
 * Adds an event listener to each element passed to it.
 * 
 * @param {Array}  elementArray An array of elements that will have the listenter added to them.
 * @param {String} listenerType Listener type (ie. 'mouseover', 'click')
 * @param {Object} event        The function to be invoked. It's passed the element that it's being invoked on. Should return a function. 
 */
function addEventListenerToEachElement(elementArray, listenerType, event) {
    elementArray.forEach(element => {
        element.addEventListener(listenerType, event(element))
    })
}

/**
 * Returns a function that toggles the visibility of the next, sibling element between "none" and whatever style it had when the page loaded.
 *  
 * @param {Element} element The element to toggle the visibility of the next sibling of.
 * @returns a function that toggles the style.display of an element between "none" and whatever style it had when the page loaded.
 */
function toggleNextSibling(element) {
    const defaultStyle = element.nextElementSibling.style.display
    return () => {
        const nextEl = element.nextElementSibling
        nextEl.style.display = nextEl.style.display === defaultStyle ? "none" : defaultStyle
    }
}

function collapseAllSubmenus(element) {

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
function hideAllDecendants(element) {
    const children = element.querySelectorAll('ul')
    let i = 0;
    while(children[i]) {
        children[i++].style.display = 'none'
    }
}