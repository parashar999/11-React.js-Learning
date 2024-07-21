(reactElement, mainContainer)=>
{
    const domElement =document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    for (const prop in reactElement.props) {    
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props : 
    {
        href :"htttps://google.com",
        target: '_blank'
    },
    children: ' Click me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)