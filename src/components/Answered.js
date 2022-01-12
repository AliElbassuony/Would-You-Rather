import { connect } from "react-redux";

const Answered = (props) => {

    const { myVote, question, author } = props

    
    const Total = question.voteOne + question.voteTwo;
    const percOfOne =  (question.voteOne / Total * 100).toFixed(1);
    const percOfTwo =  (question.voteTwo / Total * 100).toFixed(1);
    
    return ( 
            <div className="poll">
                <img
                    src={author.avatarURL}
                    alt={`Avatar of ${author.name}`}
                    className="avatar"
                />
                <p> Asked by: {author.name}</p>
                <h5><strong>Results: </strong></h5>
                <div className="poll">
                    { myVote === `optionOne` && <span className="btn btn-danger"> Your Vote </span>}
                    <p>{question.optionOne}</p>
                    <p> about: {percOfOne}% </p>
                    <p>{ question.voteOne } out of {Total} votes</p>
                </div>
                <div className="poll">
                { myVote === `optionTwo` && <span className="btn btn-danger"> Your Vote </span>}
                    <p>{question.optionTwo}</p>
                    <p> about: {percOfTwo}% </p>
                    <p>{ question.voteTwo } out of {Total} votes</p>
                </div>
            </div> 
            );
}
 
const mapStateToProps = ({users, questions, authedUser},props) => { 
    const { id } = props
    const question = {
                    author : questions[id].author,
                    optionOne: questions[id].optionOne.text,
                    optionTwo: questions[id].optionTwo.text,
                    voteOne : questions[id].optionOne.votes.length,
                    voteTwo : questions[id].optionTwo.votes.length
                }
    const myVote = users[authedUser].answers[id]
    const author = users[question.author]
    return {
        question,
        author,
        myVote
    }
}

export default connect(mapStateToProps)(Answered);