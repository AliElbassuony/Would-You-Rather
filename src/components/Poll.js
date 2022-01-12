import { connect } from "react-redux";
import { useParams } from "react-router";
import Answered from "./Answered";
import Unanswered from "./Unanswered"

const Poll = (props) => {
    const { question_id } = useParams();
    const { answered } = props
    
    const exist = answered.includes(question_id)
    
    return ( 
            <div>
                {exist ? <Answered id={question_id}/> : <Unanswered id={question_id}/>}            
            </div>
             );
}
 
const mapStateToProps = ({ users, authedUser }) => {

    return {
        answered : Object.keys(users[authedUser].answers),
    }
}

export default connect(mapStateToProps)(Poll);