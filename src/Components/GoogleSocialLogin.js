import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class GoogleSocialAuth extends Component {

  render() {
    const googleResponse = (response) => {
      console.log(response);
    }
    return (
      <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>
        <GoogleLogin
          clientId="432218542021-gescu9feea0kb1c3c6hmnj8kju0qsfs0.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={googleResponse}
          onFailure={googleResponse}
        />
      </div>
    );
  }
}

export default GoogleSocialAuth;