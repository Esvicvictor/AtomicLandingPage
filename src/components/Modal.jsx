import React, {useState} from "react";

export default function Modal(){
    const [state, setState] = useState(true)
    const [oldAge, setOldAge] = useState(5)
    const [newAge, setNewAge] = useState(0)

    const HandleClick = () => {
        setState(!state)
        setNewAge(oldAge *2)
        console.log(newAge, HandleClick);
    }
    return(
        <div className="text-center">
            {state && <h1>Show modal</h1>}
            <button onClick={HandleClick}>set</button>
            <p>I am {oldAge} years old today, tomorrow I'll be {newAge}</p>
        </div>
    )
}