import React from 'react';
import './Member.css'

const Member = (props) => {
    const {name,img,email,salary,phone,profession,gender} = props.member;
    return (
        <div className="member-component" >
            <div className="member-img">
               <img src={img} alt=""/>
            </div>
            <div className="member-list">
                <h3> Name : {name} </h3>
                <h4>Email : {email} </h4>
                <p>Phone : {phone} </p>
                <p>Gender : {gender} </p>
                <p> Profession : {profession} </p>
                <p>Salary : {salary}</p>
                <button className="main-button" onClick={()=>props.handleFriend(props.member)} >Add Friend</button>
            </div>
            
        </div>
    );
};

export default Member;