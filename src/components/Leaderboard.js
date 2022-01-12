import { connect } from "react-redux";

const Leaderboard = (props) => {
    const { users } = props
    
    return ( 
        <div>
            {  
              users.map(user => (
                  <li key={user.id}>
                    <div className="login">
                        <img 
                            src={user.avatar} 
                            alt={`Avatar of ${user.name}`}
                            className="avatar"/>
                            <span><strong>{user.name}</strong></span>
                            <div>
                                <h5>Answered Question: {user.answered}</h5>
                                <h5>Created Question: {user.created}</h5>
                                <h5>Score: {user.answered + user.created}</h5>
                            </div>
                    </div>
                  </li>
              ))
            }                
        </div> 
        );
}
 
const mapStateToProps = ({ users }) => {
    return {
        users : Object.keys(users)
            .map(user => {
                return {
                    id: users[user].id,
                    avatar: users[user].avatarURL,
                    name: users[user].name,
                    answered: Object.keys(users[user].answers).length,
                    created: users[user].questions.length,
                }
            })
            .sort((a,b) => {
                const x = a.answered + a.created
                const y = b.answered + b.created
                return y - x
                
            })
    }
}

export default connect(mapStateToProps)(Leaderboard);