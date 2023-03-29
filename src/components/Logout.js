import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Logout(){
    
    const {profile,amount,isLoading} = useSelector((state) =>state.profile);
    const navigate = useNavigate();

    function delLocal(event){
        event.preventDefault();
        localStorage.clear();
        navigate('/');
    }

    return(
        <div><h2 className="welcome">Welcome,<span id="name">{profile.name}</span></h2>
        <button id="logout" onClick={delLocal}>Logout</button></div>
    );
}

export default Logout;