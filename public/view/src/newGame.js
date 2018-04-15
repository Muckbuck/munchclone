import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {getRequest, debugTool, apiRequest} from './Utils.js';
import {Col, Row, Input, Button} from 'react-materialize'


export class GameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {values: [], users: []};
    this.token = localStorage.getItem('token');
    this.createGameUrl = 'http://localhost:8000/api/game/create';
    this.getUsersUrl = 'http://localhost:8000/api/users/get';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const me = this;
    apiRequest(this.getUsersUrl, 'GET', this.token, false).then(function(data){
     const users = data.data.map((user) => <option key={user.id} value={user.id}>{user.name}</option>) 
     me.setState({users: users});
     console.log(me.state.users);
    });
  }
  handleChange(event) {
    const fields = {input_0: 'user_id', input_1: 'name'};
    console.log(event);
    const values = this.state.values;
    const input_id = event.target.id;
    if([fields[input_id]].length() === 0){
      values.push({[fields[input_id]]: event.target.value});
    }else{
      values.Object.keys(function(){
        key
    })
    }
    
    this.setState({values: values});
    console.log(this.state.values);
  }

  handleSubmit(event) {
    apiRequest(this.createGameUrl, 'POST', this.token, false, JSON.stringify(this.state.values))
    event.preventDefault();
  }

  render() {
    return (
      <Row>
      <form action="#" id="gameForm" onSubmit={this.handleSubmit} >
      <Input s={6} label="Name" onChange={this.handleChange} id="nameField"/>
      <Input s={6} type='select' label="Group" defaultValue='2' onChange={this.handleChange}>
	{this.state.users}          
      </Input>
      <Button type="submit" form="gameForm" waves='light'>Submit</Button>
      </form>
      </Row>
    );
  }
}


