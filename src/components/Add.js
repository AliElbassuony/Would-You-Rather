import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { handleAddQuestion } from '../actions/questions';

const Add = (props) => {
    const [ one, setOne ] = useState(``);
    const [ two, setTwo ] = useState(``); 
    const [ toHome, setHome ] = useState(false);   
  	
    const { dispatch } = props
      
    const handleSubmit = (e) => {
            e.preventDefault();
            
            dispatch(handleAddQuestion(one, two));

            setOne(``);
            setTwo(``);
            setHome(true)
    }

    if (toHome === true) {
        return <Redirect to="/" />;
      }

    return ( 
            <div className="create">
                <h2> Create New Question</h2>
                <p>Would You Rather...</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Option one"
                        onChange={(e) => setOne(e.target.value)}
						value={one}
                    />
                    <strong>OR</strong>
                    <input
                        type="text"
                        placeholder="Option two"
                        onChange={(e) => setTwo(e.target.value)}
						value={two}
                    />
                    <button 
                        type="submit"
                        disabled={one === `` || two === ``}>
                       Submit
                    </button>
                </form>
            </div>
        );
}
 

export default connect()(Add);