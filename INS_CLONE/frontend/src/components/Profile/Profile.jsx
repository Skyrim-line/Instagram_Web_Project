import {Container} from "./Profile.style.js";
import ProfileInfo from "./ProfileInfo.jsx";
import ProfilePosts from "./ProfilePosts.jsx";
const Profile = ()=>{
    return (
    <Container>
        <ProfileInfo></ProfileInfo>
        <ProfilePosts></ProfilePosts>
    </Container>);
}

export default Profile;