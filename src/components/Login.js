import { connect } from 'react-redux';
import { useState } from 'react';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
    const { dispatch, users }  = props;
    const [value,setValue] = useState(``);

    const handleSubmit = e => {
        e.preventDefault();
        
        dispatch(setAuthedUser(value))

        setValue(``);
        
    }
    return (
         <div className="login">
            <h3>Would You Rather App! </h3>
            <h4> Sign in </h4>
            
            <form onSubmit={handleSubmit}>
                <select
                onChange={e => setValue(e.target.value)}
                >
                    <option value=""> Select User </option>
                    {  
                    users.map( user => 
                            <option value={user.id} key={user.id}>  {user.name}</option>
                        )
                    }
                </select>
                <br/>
                <button
                    type="submit"
                    disabled={value === ''}>
                        Sign in
                </button>
            </form>
        </div> 
    );
}

const mapStateToProps = ({ users }) => {
    return {
        users: Object.keys(users).map(user => {
            return {
                id: users[user].id,
                name: users[user].name
            }
        }),
        
        
    }
}
 
export default connect(mapStateToProps)(Login);