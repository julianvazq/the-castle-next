import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import * as S from './style';

const URL = '';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const onSubmit = (e, subscribe) => {
        e.preventDefault();
        console.log('email', email);
        console.log('subs', subscribe);
        // subscribe({EMAIL: email});
        // setEmail('');
    };

    return (
        <S.Container>
            <S.Text>Subscribe for news from The Castle</S.Text>
            <MailchimpSubscribe
                url={URL}
                render={({ subscribe, status, message }) => (
                    <div>
                        <S.StyledForm onSubmit={(e) => onSubmit(e, subscribe)}>
                            {/* <SimpleForm onSubmitted={formData => subscribe(formData)} /> */}
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type='submit'>Subscribe</button>
                        </S.StyledForm>
                        {status === 'sending' && (
                            <div style={{ color: 'blue' }}>Sending...</div>
                        )}
                        {status === 'error' && (
                            <div
                                style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: message }}
                            />
                        )}
                        {status === 'success' && (
                            <div style={{ color: 'green' }}>
                                Thank you for subscribing.
                            </div>
                        )}
                    </div>
                )}
            />
        </S.Container>
    );
};

export default NewsletterSignup;
