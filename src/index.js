import "./css/style.css";

const CLASS_NAME = 'dropdown-menu'
const SUBMENU_LINK_CLASS = 'ddms-submenu-link'
const HOVER_SETTING_CLASS = 'ddms-hover'
const CLICK_SETTING_CLASS = 'ddms-click'

init()

function init() {
    const submenuPairs = getLinkAndSubmenuPairs();
    const links = getAllMenuLinks()
    const partners = getAllLinkPartners(links)
    addClassToElements(links, SUBMENU_LINK_CLASS)    
    addEventListenerToEachElement(links, 'click', submenuLinkActionFactory)


    thing()    
} 

function thing() {
    const menus = document.querySelectorAll(`.${CLASS_NAME}`)
    console.log(menus)
    menus.forEach(e => e.addEventListener('mouseleave', mouseLeaveEvent))
}

function mouseLeaveEvent(e) {
    console.log(`MouseLeave ${e.target}`)
}

function getAllMenuLinks() {
    const menus = document.querySelectorAll(`.${CLASS_NAME} ul`)
    const links = new Array()
    let i = 0
    while(menus[i]) {
        const prevSib = menus[i].previousElementSibling
        if (prevSib) {
            links.push(prevSib)
        }
        i++
    }
    return links
}

function getAllLinkPartners(links) {
    let partners = new Array()
    for(const l of links) {
        partners.push(l.nextElementSibling)
    }
    return partners 
}

function addClassToElements(elements, className) {
    elements.forEach(e => e.classList.add(className))
}

function addEventListenerToEachElement(elementArray, listenerType, event) {
    elementArray.forEach(e => {
        e.addEventListener(listenerType, event(e))
    })
}

function submenuLinkActionFactory(element) {
    let defDispVal = window.getComputedStyle(element.nextElementSibling, null).display
    return () => {
        const nextElement = element.nextElementSibling
        const dispVal = window.getComputedStyle(nextElement, null).display
        nextElement.style.display = dispVal === defDispVal ? 'none' : defDispVal
    }
}

function getLinkAndSubmenuPairs() {
    const menus = document.querySelectorAll(`.${CLASS_NAME} ul`)
    const links = new Array()
    for(let i = 0; menus[i]; i++) {
        const prevSib = menus[i].previousElementSibling
        if (prevSib) {
            links.push({
                'link': prevSib,
                'menu': menus[i]
            })
        }
    }
    return links
}