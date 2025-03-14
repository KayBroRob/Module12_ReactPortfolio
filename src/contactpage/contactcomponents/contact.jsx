import { useState } from 'react';
import './contactstyle.css';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateName(name) || !name) {
            setErrorMessage('Name is invalid');
            return;
        }
        if (!checkEmail(email)) {
            setErrorMessage('Email is not valid');
            return;
        }
        if (!checkMessage(message)) {
            setErrorMessage('Please type a brief message');
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-left">
            <h1>Contact Me</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name" 
                />
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                />
                <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Message"
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;