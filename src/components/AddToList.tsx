import React, { useState } from 'react'
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            note: ""
        })
    }

    return (
        <div style={{display: "flex", flexDirection: "column", width: "30rem", margin: "5rem auto"}}>
            <input 
                type="text"
                onChange={handleChange}
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input 
                type="text"
                onChange={handleChange}
                name="age"
                value={input.age}
                placeholder="Age"
            />
            <input 
                type="text"
                onChange={handleChange}
                name="note"
                value={input.note}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList
