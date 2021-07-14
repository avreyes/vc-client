import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap';

const CreatePost = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [sign, setSign] = useState('')
    const [entry, setEntry] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3050/posts/create', {
            method: 'POST',
            body: JSON.stringify({post:{title: title, date: date, sign: sign, entry: entry}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            setTitle('');
            setDate('');
            setSign('');
            setEntry('');
            //props.fetchPosts();
        }) 
    }

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <div>
            <Button color='dark' onClick={toggle} style={{ marginBottom: '1rem' }}>Create Post</Button>
            <Collapse isOpen={isOpen}>
            <Form onSubmit={ handleSubmit }>
                <FormGroup>
                    <Label htmlFor='title' />
                    <Input name='title' value={ title } onChange={(e) => setTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='date' />
                    <Input type='date' name='date' value={ date } onChange={(e) => setDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='sign' />
                    <Input type='select' name='sign' value={ sign } onChange={(e) => setSign(e.target.value)}>
                        <option value='Aquarius'>Aquarius</option>
                        <option value='Aries'>Aries</option>
                        <option value='Cancer'>Cancer</option>
                        <option value='Capricorn'>Capricorn</option>
                        <option value='Gemini'>Gemini</option>
                        <option value='Leo'>Leo</option>
                        <option value='Libra'>Libra</option>
                        <option value='Pisces'>Pisces</option>
                        <option value='Sagittarius'>Sagittarius</option>
                        <option value='Scorpio'>Scorpio</option>
                        <option value='Taurus'>Taurus</option>
                        <option value='Virgo'>Virgo</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='entry' />
                    <Input name='entry' value={ entry } onChange={(e) => setEntry(e.target.value)} />
                </FormGroup>
                <Button type='submit'>Post!</Button>
            </Form>
            </Collapse>
            </div>
        </>
    )
}
export default CreatePost;