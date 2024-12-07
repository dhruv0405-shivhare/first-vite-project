import "./Event.css"
const Event = () =>{

    function cl (){
        alert("clicked")
    }
    function click (){
        alert("double clicked")
    }
    function change()
    {
        let a = document.querySelector("#container")
        a.style.backgroundColor="red"
    }
    function change1()
    {
         let a = document.querySelector("#container")
        a.style.backgroundColor="blue"
    }

    return(
        <>
        <button onClick={cl}>Click here</button> <br />
        <button onDoubleClick={click}> double click </button>
        <div id="container" onMouseEnter={change} onMouseLeave={change1}>

        </div>
        </>
    )
}
export default Event