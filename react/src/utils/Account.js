import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../utils/UserPool';
import { useHistory } from "react-router-dom";
import auth from '../utils/auth';
import AWS from 'aws-sdk/global';

const AccountContext = createContext();

const Account = props => {
    let history = useHistory();

  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: function(result) {
            var accessToken = result.getAccessToken().getJwtToken();
    
            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWS.config.region = 'us-east-1';
     
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:bdc6d27e-a324-47e3-88b0-895f4c50c66d', // your identity pool id here
                Logins: {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.us-east-1.amazonaws.com/us-east-1_BxmkyA64E': result
                        .getIdToken()
                        .getJwtToken(),
                },
            });
     
            //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            AWS.config.credentials.refresh(error => {
                if (error) {
                    console.error(error);
                } else {
                    // Instantiate aws sdk service objects now that the credentials have been updated.
                    // example: var s3 = new AWS.S3();
                    auth.login(()=>{
                        history.push("/dashboard");
                    });
                    user.getUserAttributes(function(err, result) {
                        if (err) {
                            alert(err.message || JSON.stringify(err));
                            return;
                        }
                        for (var i = 0; i < result.length; i++) {
                            console.log(
                                'attribute ' + result[i].getName() + ' has value ' + result[i].getValue()
                            );
                        }
                    });
                    resolve(result);
                    console.log('Successfully logged!');
                }
            });


        // onSuccess: data => {
        //     auth.login(()=>{
        //               history.push("/dashboard");
        //     });
        //   console.log('onSuccess:', data);
        //   resolve(data);
        },

        onFailure: err => {
          console.error('onFailure:', err);
          reject(err);
        },

        newPasswordRequired: data => {
          console.log('newPasswordRequired:', data);
          resolve(data);
        }
      });
    });
  
  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      auth.logout(()=>{
       history.push('/');
        })
    }
  }

  return (
    <AccountContext.Provider value={{
      authenticate,
      getSession,
      logout
    }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };