import AWS from 'aws-sdk';

const ses = new AWS.SES({region: 'eu-west-1'});

async function sendMail(event, context) {
  const params = {
    Source:'workemailak3@gmail.com',
    Destination:{
      ToAddresses: ['workemailak3@gmail.com']
    },
    Message:{
      Body:{
        Text:{
          Data: 'Hello from Anshul! Sent from AWS SES.',
        },
      },
      Subject:{
        Data:'Test Mail',
      },
    },
  };
  try{
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch(error){
    console.error(error);
  }
}

export const handler = sendMail;


