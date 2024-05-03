import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSetNewPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match. Please try again.");
      return;
    }

    // make an API call to the backend to update the password
    console.log('New password set successfully');
    
    // Placeholder for success response
    
    navigate('/login'); // Placeholder for redirection after successful password reset
  };

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="flex w-1/2 bg-gray-100 justify-center items-center">
        <div className="text-center">
          <img src="./img/baydevelopslogo.svg" alt="Company Logo" className="mx-auto"/>
          <h1 className="m-0 relative font-bold mt-4">Network Infrastructure Solutions</h1>
          <p className="text-gray-600 mt-4">Everything you need in an one dashboard.</p>
        </div>
      </div>

      {/* Set New Password Form Section */}
      <div className="flex w-1/2 justify-center items-center bg-white p-12">
        <div className="max-w-fit w-full">
          <h2 className="text-3xl font-bold mb-2">Set New Password</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSetNewPassword}>
          <div>
              <label htmlFor="reset-code" className="sr-only">Reset Code</label>
              <input 
                id="reset-code" 
                name="reset-code" 
                type="password" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-b-md" 
                placeholder="Enter Code"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="sr-only">New Password</label>
              <input 
                id="new-password" 
                name="new-password" 
                type="password" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-t-md" 
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input 
                id="confirm-password" 
                name="confirm-password" 
                type="password" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-b-md" 
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="mt-2 text-sm text-red-600">{errorMessage}</p>}
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Set New Password
              </button>
            </div>
            <div className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Didn't receive an email? Resend
                </a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;