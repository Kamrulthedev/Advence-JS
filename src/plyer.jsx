import { useState } from "react";


const Plyers = () => {
    const [plyer, setPlyer] = useState(11);

    const handlerAdd = () =>{
        const newPlyer = plyer + 1;
        setPlyer(newPlyer);
    };

    const handlerDelete = () =>{
         const newPlyer = plyer - 1;
         setPlyer(newPlyer)
    };

    const PlyersStyle ={
        border: '2px solid purple',
        mergin: '20px',
        padding: '20px',
        borderRadius: '15px',
        marginBottom: '20px' 
    };
   
    
    return (
        <div style={PlyersStyle}>
            <h2>Plyers: {plyer}</h2>
            <button onClick={handlerAdd}>add</button>
            <button  className="deleteButton" onClick={handlerDelete}>Delete</button>
        </div>
    );
};

export default Plyers;