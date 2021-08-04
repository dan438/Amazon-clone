import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from "../../firebase";


function ProtectedRoute(props) {
    const history = useHistory();
    let Component = props.Component
    
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (!authUser) {
                history.push("/login")
            };    
          });     
    }, []);
  

    return (
        <div>
            <Component />
        </div>

    )
}

export default ProtectedRoute;
