import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton: React.FC = () => {
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log('Login Success:', credentialResponse);
    const decoded: any = jwtDecode(credentialResponse.credential);
    console.log('Decoded Token:', decoded);
  };

  const handleLoginError = () => {
    console.error('Login Failed');
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
     
    </div>
  );
};

export default GoogleLoginButton;
