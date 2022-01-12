import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="app">
          <div className="center">
              404 Page NOT Found
              <Link to='/'>
                Return Home...
              </Link>
          </div>  
        </div>
    );
}
 
export default Notfound;