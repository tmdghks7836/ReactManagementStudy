import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'


const students = [{
  id : 1,
  image : 'https://placeimg.com/64/64/any',
  name : "이승환",
  birthDay : "940928",
  sex : "남자",
  job : "중고신입 학생"

},
{
  id : 2,
  image : 'https://placeimg.com/64/64/any',
  name : "pa[ap",
  birthDay : "940928",
  sex : "남자",
  job : "fdas 학생"

},
{
  id : 3,
  image : 'https://placeimg.com/64/64/any',
  name : "ghkstmddl",
  birthDay : "940928",
  sex : "여자",
  job : "ee 학생"

}]

class App extends Component {

  render() {
  return (
    <div>
  {
    students.map(c => {
      return <Customer 
      key={c.id}
      student={c}
      />
    })
  }
    </div>
  );
}
}

export default App;
