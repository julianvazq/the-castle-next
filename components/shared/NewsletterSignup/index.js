import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import * as S from './style';

const URL =
    'https://thecastle603.us6.list-manage.com/subscribe/post?u=811a68d3cf08f3deed5afbdee&amp;id=8abfc60f6e';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const onSubmit = (e, subscribe) => {
        e.preventDefault();

        if (!email.length) return;

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
            <S.FormContainer>
                <MailchimpSubscribe
                    url={URL}
                    render={({ subscribe, status, message }) => (
                        <>
                            {status !== 'success' && (
                                <S.StyledForm
                                    id='mc-embedded-subscribe-form'
                                    name='mc-embedded-subscribe-form'
                                    target='_blank'
                                    novalidate
                                    onSubmit={(e) => onSubmit(e, subscribe)}
                                >
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        name='email'
                                        id='email'
                                        aria-label='email'
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <S.HiddenInput aria-hidden='true'>
                                        <input
                                            type='text'
                                            name='b_811a68d3cf08f3deed5afbdee_8abfc60f6e'
                                            tabIndex='-1'
                                            defaultValue=''
                                        />
                                    </S.HiddenInput>
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
                                <S.Message
                                    dangerouslySetInnerHTML={{
                                        __html: message,
                                    }}
                                />
                            )}
                            {status === 'success' && (
                                <S.Success>
                                    Thank you for subscribing.
                                </S.Success>
                            )}
                        </>
                    )}
                />
            </S.FormContainer>
        </S.Container>
    );
};

export default NewsletterSignup;
