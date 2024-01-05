import {useParams} from "react-router-dom";
import {InfoContainer} from "./Profile.style.js";

const ProfileInfo = ()=>{
    const { id }=useParams();
    console.log("id",id);
    return (
        <InfoContainer>
            <h2>
                Sorry,User with id <span>{id}</span> Does not Exist!
            </h2>
        </InfoContainer>
    );
};

export default ProfileInfo;