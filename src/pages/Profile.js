import Bonus from '../assets/bonus.png'
import RecentOrders from '../components/RecentOrders'
const Profile = () =>{
    return(
        <div id='profile_container'>
            <h1>Hello, Shalom!</h1>

            <img src={Bonus} alt='bonus'/>

            <RecentOrders />
        </div>
    )
}

export default Profile