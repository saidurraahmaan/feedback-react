import React, {createContext,useState,useEffect} from 'react'




const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{

    const [isLoading,setIsLoading] = useState(true);
    const [feedback,setFeedback] = useState([]);
    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    });

    useEffect(()=>{
        fetchFeedback()
            .catch(error=>console.log(error));
    },[])

    //Fetch Feedback
    const fetchFeedback = async ()=>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure?')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((element) =>
                (element.id !== id)
            ));
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    //Update Feedback
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = response.json();

        setFeedback(feedback.map((item) =>
            item.id === id ? {...item, ...data} : item)
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
        isLoading:isLoading,
        deleteFeedback:deleteFeedback,
        addFeedback:addFeedback,
        editFeedback:editFeedback,
        updateFeedback,

    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext;