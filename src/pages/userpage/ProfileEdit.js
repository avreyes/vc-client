import React, {  useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap';

export default function userEdit (props) {
    const [editFirstName, setEditFirstName] = useState(props.userInfoToUpdate.firstName);
    const [editBirthday, setEditBirthday] = useState(props.userInfoToUpdate.birthday);
    const [editEmail, setEditEmail] = useState(props.userInfoToUpdate.email);
    const [editAbout, setEditAbout] = useState(props.userInfoToUpdate.about);
    const [editZodiac, setZodiac] = useState(props.userInfoToUpdate.zodiac);
    const updateUserInfo = (event, userInfo) => {
        event.preventDefault();
        fetch(`http://localhost:3050/user/edit/${props.userToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({
                user: {
                    firstName: editFirstName,
                    birthday: editBirthday,
                    emaiil: editEmail,
                    about: editAbout,
                    zodiac: editZodiac
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchUserInfo();
            props.updateOff();
        })
    }

    return(
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
    )
}


// class ProfileEdit extends Component {
//     constructor(props)  {
//         super(props);
//         this.state = {
//             user: [
//             ]
//         }
//     }
//     componentDidMount() {
//         fetch('https://localhost:3050/user/edit/${props.userToUpdate.id}', requestOptions)
//         const requestOptions = {
//             method: 'PUT',
//             body: JSON.stringify({
//                 user: {
//                     firstName: editFirstName, birthday: editBirthday, email: editEmail, about: editAbout, zodiac: editZodiac
//                 }
//             }),
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization': this.props.token
//             })
//             .then(response => response.json())
//             .then(data => this.setState({ userId: data.id }))
//         }
//     }

//     render() {
//         const [isOpen, setIsOpen] = useState(false);
//         const toggle = () => setIsOpen(!isOpen);

//         const { userId } = this.state;
//         return (

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



}
export default ProfileEdit;