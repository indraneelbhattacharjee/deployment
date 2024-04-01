import React, { useState } from 'react';
import axios from 'axios';

export const ProfilePage = () => {
    const [currentUsername, setCurrentUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/update-email', {
                currentEmail,
                newEmail
            });
            console.log(response.data);
            // Reset form fields or show success message
        } catch (error) {
            console.error('Error updating email:', error);
            // Handle error responses
        }
    };

    const handleUsernameSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/update-username', {
                currentUsername,
                newUsername
            });
            console.log(response.data);
            // Reset form fields or show success message
        } catch (error) {
            console.error('Error updating username:', error);
            // Handle error responses
        }
    };

    return (
        <div className='bg-black h-screen flex justify-center items-center'>
            <div className='container bg-pink rounded-lg w-2/3 h-1/2 mt-8 max-w-[1000] sm:min-h-[900]'>
                <h1 className="text-6xl flex justify-center text-white p-5">Profile Info</h1>
                <div className="flex flex-col items-center border border-black border-solid shadow-lg w-500 bg-pink min-w-[437] rounded-lg">
                    <h1 className="text-white container object-right-bottom">*Required Fields</h1>
                    <form className="flex justify-around gap-x-44 flex-wrap" onSubmit={handleEmailSubmit}>
                        <label className="text-white text-4xl-2">Change Email*:<br />
                            <input className="min-w-[250] p-3 rounded-md  text-black" type="text" name="currentEmail" placeholder='Enter Email' value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)} />
                        </label>
                        <label className="text-white text-4xl-2">Confirm Change*:<br />
                            <input className="min-w-[250] p-3 rounded-md text-black" type="text" name="newEmail" placeholder='Enter Email' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                        </label>
                        <button type='submit' className='bg-black text-white border-r-5 p-6 m-5 rounded-xl'>Save Changes</button>
                    </form>
                    <form className="flex justify-around gap-x-44 flex-wrap" onSubmit={handleUsernameSubmit}>
                        <label className="text-white text-4xl-2">Change Username:<br />
                            <input className="min-w-[250] p-3 rounded-md text-black " type="text" name="currentUsername" placeholder='Current Username' value={currentUsername} onChange={(e) => setCurrentUsername(e.target.value)} />
                        </label>
                        <label className="text-white text-4xl-2">Confirm*:<br />
                            <input className="min-w-[250] p-3 rounded-md text-black" type="text" name="newUsername" placeholder='New Username' value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                        </label>
                        <button type='submit' className='bg-black text-white border-r-5 p-6 m-5 rounded-xl'>Save Changes</button>
                    </form>
                    <a href='#' className='text-white p-20 text-4xl-2'>Change Password</a>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
