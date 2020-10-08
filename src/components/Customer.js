import React from 'react';

class Customer extends React.Component{

    constructor(props){
        super(props);

    }
    render() {

        return (
        <div>
            <CustomerProfile student={this.props.student}/>
            <CustomerInfo student={this.props.student}/>
        </div>
        );
    }
}


class CustomerProfile extends React.Component{


    render(){
        return (<div>
            <img src={this.props.student.image} alt="profile"></img>
            <h2>{this.props.student.name}({this.props.student.id})</h2>
        </div>
      
        )
    }
}

class CustomerInfo extends React.Component{
    render() {

        return (
            <div>
                <p>{this.props.student.birthDay}</p>
                <p>{this.props.student.sex}</p>
                <p>{this.props.student.job}</p>


            </div>


        );
    }
}
export default Customer