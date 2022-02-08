import React, {useState,useContext,useEffect} from "react";
import List from "./shared/List";
import FeedbackContext from "../context/FeedbackContext";


function RatingSelect({select}) {
    const [selected,setSelected] = useState(10);
    const {feedbackEdit} = useContext(FeedbackContext);

    useEffect(()=>{
        setSelected(feedbackEdit.item.rating);
    },[feedbackEdit]);

    const handleChange = (e)=>{
        setSelected(+e.target.value)
        select(+e.target.value);
    }


    return(
        <ul className='rating'>
            <List type='radio' id='num1' value='1' handleChange={handleChange} checked={selected===1}/>
            <List type='radio' id='num2' value='2' handleChange={handleChange} checked={selected===2}/>
            <List type='radio' id='num3' value='3' handleChange={handleChange} checked={selected===3}/>
            <List type='radio' id='num4' value='4' handleChange={handleChange} checked={selected===4}/>
            <List type='radio' id='num5' value='5' handleChange={handleChange} checked={selected===5}/>
            <List type='radio' id='num6' value='6' handleChange={handleChange} checked={selected===6}/>
            <List type='radio' id='num7' value='7' handleChange={handleChange} checked={selected===7}/>
            <List type='radio' id='num8' value='8' handleChange={handleChange} checked={selected===8}/>
            <List type='radio' id='num9' value='9' handleChange={handleChange} checked={selected===9}/>
            <List type='radio' id='num10' value='10' handleChange={handleChange} checked={selected===10}/>
        </ul>
    );
}

export default RatingSelect;