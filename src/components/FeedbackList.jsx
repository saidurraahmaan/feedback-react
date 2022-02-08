import FeedbackItem from "./FeedbackItem";
import React from "react";
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";


function FeedbackLIst() {
    const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }


    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
}

export default FeedbackLIst;