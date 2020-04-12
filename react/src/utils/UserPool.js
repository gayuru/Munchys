import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId:'us-east-1_BxmkyA64E',
  ClientId: 'ad68851i8vs1u92redqluoagt'
}

export default new CognitoUserPool(poolData);