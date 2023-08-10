require('dotenv');

const auth = {
    type: 'OAuth2',
    user: '<YOUR_GMAIL_ID>',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
};

const mailOptions = {    
    to: '<RECIPIENT_MAIL_ID>',
    from: 'YOUR_GMAIL_ID',
    subject: 'Gmail API using Node JS',
};

module.exports = {
    auth,
    mailOptions
}