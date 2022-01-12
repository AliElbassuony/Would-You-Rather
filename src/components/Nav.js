import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {setAuthedUser} from '../actions/authedUser'

const Nav = (props) => {
    const {dispatch,authedUser ,avatarURL} = props


    const handleLogout = e => {
		e.preventDefault();
		dispatch(setAuthedUser(null))
	};

    return ( 
            <div className="navbar">
                <h2>Would You Rather...?</h2>
                <div className="links">
					<Link to='/'> Home </Link>
					<Link to='/add'> New Question</Link>
					<Link to='/leaderboard'>Leaderboard</Link>
				</div>
                <div className="links">
                    <span>{authedUser}</span>
					 <img 
                        src={avatarURL} 
                        alt={`Avatar of ${authedUser}`} 
                        className='avatar'  />
					<button
						onClick={handleLogout}>
						Logout
					</button> 
				</div> 

            </div>
     );
}
const mapStateToProps = ({authedUser,users}) => {
        return {
            authedUser:users[authedUser].name,
            avatarURL:users[authedUser].avatarURL
        }
} 

export default connect(mapStateToProps)(Nav);