import React from 'react';
import logo from './logo.svg';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            'showRegister': true,
            'name': '',
            'password': '',
            'email': ''
        }
    }

    handleLoginSubmit() {
    	let data = {
    		'email': this.state.email,
    		'password': this.state.password
    	}
    	axios({
    		url: 'http://localhost:5000/users/login',
    		method: 'post',
    		data: data
    	}).then((res) => {
    		alert('Login successful')
    	}).catch(err => {
    		alert('Wrong details')
    	})


    }

    handleRegisterSubmit() {
    	let data = {
    		'name': this.state.name,
    		'email': this.state.email,
    		'password': this.state.password
    	}
    	axios({
    		url: 'http://localhost:5000/users',
    		method: 'post',
    		data: data
    	}).then((res) => {
    		alert('Register successful')
    	}).catch(err => {
    		alert('Wrong details')
    	})

    }
    changeHandler(e) {
        let data = {}
        data[e.target.name] = e.target.value
     this.setState(data)
    }
    loginForm() {
        return (
            <Form>
            	<Form.Group>
            		<Form.Label>Email</Form.Label>
            		<Form.Control type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
            	</Form.Group>
            	<Form.Group>
            		<Form.Label>Password</Form.Label>
            		<Form.Control type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
            	</Form.Group>
            	<Button onClick={() => this.handleLoginSubmit()}>SUBMIT</Button>
            </Form>
        )
    }
    registerForm() {
        return (
        	<Form>
        		<Form.Group>
            		<Form.Label>Name</Form.Label>
            		<Form.Control type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
            	</Form.Group>
            	<Form.Group>
            		<Form.Label>Email</Form.Label>
            		<Form.Control type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
            	</Form.Group>
            	<Form.Group>
            		<Form.Label>Password</Form.Label>
            		<Form.Control type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
            	</Form.Group>
            	<Button onClick={() => this.handleRegisterSubmit()}>SUBMIT</Button>
            </Form>
        )
    }
    toggle() {
    	console.log(this.state.showRegister)
        this.setState({ 'showRegister': !this.state.showRegister })
    }
    render() {
        let { showRegister } = this.state;
        return (
            <Container>
            <h1>ICP</h1>
                <Button onClick={this.toggle}>Toggle</Button>
                {showRegister?this.registerForm():this.loginForm()}
            </Container>
        )

    }

}

export default App;
