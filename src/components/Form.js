import {useState} from 'react';

export default function Form() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const [apiError, setApiError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleCompany = (e) => {
        setCompany(e.target.value);
        setSubmitted(false);
    };

    const handlePosition = (e) => {
        setPosition(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || company === '' || position === '') {
            setFormError(true);
        } else {
            let jsonData = {
                "companyName": company,
                "user": name,
                "userEmail": email,
                "position": position
            }

            fetch('https://web-service-3eugyejtka-ue.a.run.app/company-signup', {  // Enter your IP address here

                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

            }).then((data) => {
                setSubmitted(true)
                console.log("Sign Up Successful");
            }).catch((error) => {
                console.log('error: ' + error);
                setApiError(true)
            })
            setSubmitted(true)
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    // Showing form error message if error is true
    const formErrorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: formError ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const apiErrorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: apiError ? '' : 'none',
                }}>
                <h1>API Error</h1>
            </div>
        );
    };

    return (
            <div>
                <div className="text-center">
                    <p className="text-xs">Logo will go here</p>
                    <h1 className="text-3xl font-bold mb-4">Sign Up Your Company</h1>
                    <p className="text-xs italic">So you can give us feedback in weekly emails...</p>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                    {apiErrorMessage()}
                    {formErrorMessage()}
                    {successMessage()}
                </div>

                {!submitted && <form className="text-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {/* Labels and inputs for form data */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                        <input onChange={handleCompany}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               value={company} type="text"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input onChange={handleName}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               value={name} type="text"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input onChange={handleEmail}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               value={email} type="email"/>

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Position</label>
                        <input onChange={handlePosition}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               value={position} type="text"/>
                    </div>

                    <button onClick={handleSubmit}
                            className="text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            type="submit">
                        Submit
                    </button>
                </form>
                }
        </div>
    );
}