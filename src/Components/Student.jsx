import React from 'react';

export class Student extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { pic, firstName, lastName, email, grades, company, skill } = this.props;
        return (
            <div>
                <img src={pic} />
                <h2>{firstName + " " + lastName}</h2>
                <p>Email: {email}</p>
                <p>Company: {company}</p>
                <p>Skill: {skill}</p>
                <p>Average: {arrAvg(grades)}%</p>
            </div>
        );
    }
}

const arrAvg = arr => arr.reduce((a,b) => a + Number(b), 0) / arr.length;