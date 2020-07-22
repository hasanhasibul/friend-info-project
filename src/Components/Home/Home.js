import React, { useState } from 'react';
import './Home.css'
import fakeData from '../../fakeData/fakeData'
import Member from '../Member/Member';
import Count from '../Count/Count';
const Home = () => {
   const [friend,setFriend] = useState(fakeData);
   const [count,setCount] = useState([]);
     
   const handleFriend = (details) =>{
       console.log('friend added',details)
    const newCount = [...count,details];
    setCount(newCount);

   }
    return (
        <div className="home" >
            <div className="member">
               {
                   friend.map(mb => <Member member={mb} handleFriend={handleFriend} ></Member>)
               }
            </div>
            <div className="member-count">
               <Count count= {count} ></Count>
            </div>
        </div>
    );
};

export default Home;