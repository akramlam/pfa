import { config, CognitoIdentityServiceProvider } from 'aws-sdk';
config.update(
    { region: 'us-east-1',
    accessKeyId: 'AKIA4SA2JOP4K5GPTRF2',
    secretAccessKey: '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'

});
const cognito = new CognitoIdentityServiceProvider();
export async function signUp(username, password) {
    const params = {
        ClientId: 'us-east-1_YtzeJhjeo',
        Username: username,
        Password: password,

    };
    try {
        await cognito.signUp(params).promise();
        console.log('User signed up successfully');
    } catch (error) {
        console.error('Error signing up:', error);
    }
}


