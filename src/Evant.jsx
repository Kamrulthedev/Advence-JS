

const Evant = () => {

    function handleClick() {
        alert('Click me');
    }

    const handleClicked = () =>{
        alert('Clicked button 2');
    }
    
    const handleClickb4 = (num) =>{
     alert(num + 5);
    }
    
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleClicked}>Click Me2</button>
            <button onClick={()=>{alert('Clicking the button 3')}}>Click Me3</button>
            <button onClick={()=>handleClickb4(5)}>Click Me4</button>
        </div>
    );
};

export default Evant;