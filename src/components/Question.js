import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatQuestion } from "../utils/helpers";
import Notfound from "./Notfound";

const Question = (props) => {
        const { question } = props

        if(question === null)
        {
            return (<Notfound/>)
        }
        const { author , avatarURL, text, id} = question

    return ( 
            <div className="login">
                <img 
                src={avatarURL}
                alt={`Avatar of ${author}`}
                className="avatar"
                 />
                <span>{author}</span>
                <p>{text}...</p>

                <Link to={`/questions/${id}`}>
                    <button >view poll</button>
                </Link>
            </div>
             );
}
 
const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
    const question = questions[id];
    return {
        
        question : question ? formatQuestion(question, users[question.author]) : null,
        authedUser : question ? authedUser : null, 
    }
}
export default connect(mapStateToProps)(Question);