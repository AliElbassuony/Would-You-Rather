import { useState } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions"
import Notfound from "./Notfound";

const Unanswered = (props) => {
     let { author, question, id, dispatch } = props
    const [ value, setValue ] = useState(``)


    if(question === null)
    {
        return <Notfound/>
    }

     question = {
        author : question.author,
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text,
        voteOne : question.optionOne.votes.length,
        voteTwo : question.optionTwo.votes.length
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(handleSaveQuestionAnswer(id,value));

        setValue(``);

    }

    return ( 
            <div className="poll">
                <img 
                    src={author.avatarURL}
                    alt={`Avatar of ${author.name}`}
                    className="avatar"/>
                <p> {author.name } asks: </p>
                <h3> Would You Rather...</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="radio"
                        id="one"
                        name="option"
                        value="optionOne"
                        onChange={e => setValue(e.target.value)}
                    />
                    <label htmlFor="one">{question.optionOne}</label>
                    <br/>
                    <input 
                        type="radio"
                        id="two"
                        name="option"
                        value="optionTwo"
                        onChange={e => setValue(e.target.value)}
                    />
                    <label htmlFor="two">{question.optionTwo}</label>
                    <br/>
                    <button disabled={value === ``}> Submit </button>
                </form>
            </div> );
}
 
const mapStateToProps = ({ users, questions },props) => {
    const { id } = props

    return {
        question: questions[id] ? questions[id] : null,
        author: questions[id] ? users[questions[id].author] : null,
    }
}

export default connect(mapStateToProps)(Unanswered);