import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {getRequest, debugTool, apiRequest} from './Utils.js';
import {Col, Row, Input, Button} from 'react-materialize'


export class GameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', users: []};
    this.token = localStorage.getItem('token');
    this.createGameUrl = 'http://localhost:8000/api/game/create';
    this.getUsersUrl = 'http://localhost:8000/api/users/get';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    apiRequest(this.getUsersUrl, 'GET', false).then(function(data){
     this.setState.users = data.data.map((user) => <option key={user.id} value={user.id}>{user.id}</option>) 
    });
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    console.log(this.token);
    apiRequest(this.url, 'POST', this.token, false)
    event.preventDefault();
  }

  render() {
    return (
      <Row>
      <form action="#" id="gameForm" onSubmit={this.handleSubmit} >
      <Input s={6} label="Name" />
      <Input s={6} type='select' label="Group" defaultValue='2'>
	{this.state.users}          
      </Input>
      <Button type="submit" form="gameForm" waves='light'>Submit</Button>
      </form>
      </Row>
    );
  }
}


