import React from 'react';

const Count = (props) => {
    const count = props.count;
    let salary = 0;
    for (let i = 0; i < count.length; i++) {
        const member = count[i];
        salary = salary + parseInt(member.salary);
        
    }
    return (
        <div>
            <h3>Member Summery : </h3>
           <h4>Friend Added : {count.length}</h4>
           <h4>Salary : {parseFloat(salary)} </h4>
        </div>
    );
};

export default Count;