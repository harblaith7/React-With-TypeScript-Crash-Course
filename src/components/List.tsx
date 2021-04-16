import React from 'react'
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
}

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li style={{listStyle: "none", margin: "3rem"}}>
                    <h3>{person.name}</h3>
                    <p>{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default List
