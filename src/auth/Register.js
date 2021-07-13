import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [about, setAbout] = useState('');
    const [zodiac, setZodiac] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault ();
        console.log(firstName, birthday, email, password, about, zodiac);
        
        fetch('http://localhost:3050/user/register', {
            method: 'POST',
            body: JSON.stringify({user:{firstName: firstName, birthday: birthday, email: email, password: password, about: about, zodiac: zodiac}}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h1>Register</h1>

            <Form onSubmit={ handleSubmit }>
                <FormGroup>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name='firstName' value={ firstName } />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='birthday'>Birthday</Label>
                    <Input onChange={(e) => setBirthday(e.target.value)} name='birthday' value={ birthday } />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name='email' value={ email } />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={ password } />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='about'>About</Label>
                    <Input onChange={(e) => setAbout(e.target.value)} name='about' value={ about } />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='zodiac'>Zodiac</Label>
                    <Input onChange={(e) => setZodiac(e.target.value)} name='zodiac' value={ zodiac } />
                </FormGroup>
                <Button type='submit'>Register</Button>
            </Form>
        </div>
    )
}

export default Register;