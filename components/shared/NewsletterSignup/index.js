import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import * as S from './style';

const URL = '';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const onSubmit = (e, subscribe) => {
        e.preventDefault();

        if (!email.length) return;

        console.log('subs', subscribe);
        try {
            subscribe({ EMAIL: email });
        } catch (error) {
            console.log(error);
        }
        setEmail('');
    };

    return (
        <S.Container>
            <S.Text>Subscribe for news from The Castle</S.Text>
            <MailchimpSubscribe
                url={URL}
                render={({ subscribe, status, message }) => (
                    <div>
                        {console.log(status)}
                        {status !== 'success' && (
                            <S.StyledForm
                                onSubmit={(e) => onSubmit(e, subscribe)}
                            >
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    id='email'
                                    aria-label='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type='submit'
                                    disabled={status === 'sending'}
                                >
                                    Subscribe
                                </button>
                            </S.StyledForm>
                        )}
                        {status === 'sending' && (
                            <S.Message>Subscribing...</S.Message>
                        )}
                        {status === 'error' && (
                            <S.Message>
                                Sorry, something went wrong. Try again.
                            </S.Message>
                        )}
                        {status === 'success' && (
                            <S.Success>Thank you for subscribing.</S.Success>
                        )}
                    </div>
                )}
            />
        </S.Container>
    );
};

export default NewsletterSignup;
