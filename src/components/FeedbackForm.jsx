import React, {useContext, useState, useEffect} from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('')

    const {addFeedback,feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit])


    const handleTextChange = (e) => {

        if(text===''){
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(text !=='' && text.trim().length<10){
            setMessage('At least 10 character');
            setBtnDisabled(true);
        }
        else{
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value)
    }
    const handleRating = (rating)=>{
        setRating(rating);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback = {
                text:text,
                rating:rating
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }

            setText('');
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with use?</h2>
                <RatingSelect select={handleRating}/>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        value={text}
                        type="text"
                        placeholder='Write a review'
                    />
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;