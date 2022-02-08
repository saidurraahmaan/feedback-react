import React, {createContext,useState} from 'react'
import {v4 as uuidv4} from "uuid";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'This item is from context',
            rating:10
        },
        {
            id:2,
            text:'This item is also from context',
            rating:8
        },
    ])

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((element) =>
                (element.id !== id)
            ));
        }
    }

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    //Update Feedback
    const updateFeedback = (id,updItem)=>{
        setFeedback(feedback.map((item)=>
            item.id===id?{...item,...updItem}:item)
        );
    }

    const editFeedback = (item)=>{

        setFeedbackEdit({
            item:item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback:feedback,
        feedbackEdit:feedbackEdit,
        deleteFeedback:deleteFeedback,
        addFeedback:addFeedback,
        editFeedback:editFeedback,
        updateFeedback,

    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext;