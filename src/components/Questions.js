import { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";


const Questions = (props) => {
    const [Load,setLoad] = useState(false);
    const {answeredQuestions,unansweredQuestions} = props

    const handleClick = (e) => {   
        if(e.target.innerHTML ===`Unanswered Questions`)
        {
            setLoad(false);
        } else if(e.target.innerHTML ===`Answered Questions`){
            setLoad(true)
        }
    }

    return ( 
            <div className="app">
                <div className="header">
                    <div className="links center">
                        <button onClick={handleClick}>Unanswered Questions</button> 
                        <button onClick={handleClick}>Answered Questions</button>
                        <ul className="List">
                            { Load && answeredQuestions.map(question => {
                                return (
                                    <li key={question.id}>
                                        <Question id={question.id}/>
                                    </li>
                                    );
                                })
                            }
                            {!Load &&
                                unansweredQuestions.map(question => {
                                    return (
                                        <li key={question.id}>
                                            <Question id={question.id} />
                                        </li>
                                    );
                                })
                            }        
                        </ul>
                    </div>
                </div>
            </div>
             );
}
 
const mapStateToProps = ({ users, authedUser, questions }) => {
       const answeredQuestionsIds = Object.keys(users[authedUser].answers)
       const answeredQuestions = Object.values(questions)
            .filter(question => answeredQuestionsIds.includes(question.id))
            .sort((a,b) => b.timestamp - a.timestamp)
       const unansweredQuestions = Object.values(questions)
            .filter(question => !answeredQuestionsIds.includes(question.id))
            .sort((a,b) => b.timestamp - a.timestamp)
           
        return {
            answeredQuestions,
           unansweredQuestions
    }
}

export default connect(mapStateToProps)(Questions);