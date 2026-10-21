const roots = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
    return (<div id="header-container">
        <div>Header</div>
        </div>)
}
const ProductComponent = () => {
    return (<div id="prod-container">
        <div>01</div>
        </div>)
}

const appRender = () => {
    const roots = ReactDOM.createRoot(document.getElementById("root"));
    const reactElement = <>
        <HeaderComponent />
        <ProductComponent />
    </> 
    roots.render(reactElement);
}
appRender();
 