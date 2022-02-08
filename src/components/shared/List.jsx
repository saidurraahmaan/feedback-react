import React from "react";

function List({type, id, value, handleChange,checked}) {

    return (

        <li>
            <input
                type={type}
                id={id}
                name='rating'
                value={value}
                onChange={handleChange}
                checked={checked}
            />
            <label htmlFor={id}>{value}</label>
        </li>

    );
}

export default List;