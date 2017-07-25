import React from 'react';

export class Home extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <p>In a new Component!</p>
                <p>your name: {this.props.name}, your age: {this.props.age}</p>
                <p>user object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby) => <li key={hobby.id}>{hobby.name}</li>)}
                    </ul>
                </div>
            </div>            
        );
    }
}