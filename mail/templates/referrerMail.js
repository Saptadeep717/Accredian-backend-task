exports.referrerEmail = (yourName, friendName) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Referral Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
                border-radius: 10px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #1f1f1f;
                color: #f3f6e7;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            
            <div class="message">Referral Confirmation</div>
            <div class="body">
                <p>Dear ${yourName},</p>
                <p>You have successfully referred your friend <span class="highlight">"${friendName}"</span> who will be contacted shortly.</p>
                
            </div>
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at
            <a href="mailto:testSap52@gmail.com">info@referral.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
};

exports.referreEmail = (yourName, friendName) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Referral Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
                border-radius: 10px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #1f1f1f;
                color: #f3f6e7;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            
            <div class="message">Referral Confirmation</div>
            <div class="body">
                <p>Dear ${friendName},</p>
                <p>You have been successfully referred by your friend <span class="highlight">"${yourName}"</span>. We
                    are excited to have you as a participant!</p>
                <p>Please log in to your site for further details..
                </p>
            </div>
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at
            <a href="mailto:testSap52@gmail.com">info@referral.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
};

