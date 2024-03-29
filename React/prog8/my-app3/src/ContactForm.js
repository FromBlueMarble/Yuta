import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubmitted: false,
            email:"",
            hasEmailError:false,

            content:'',
            hasContentError:false,

        };
    }

    handleEmailChange(event){
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';


        this.setState({
            email:inputValue,
            hasEmailError:isEmpty,
        });
    }

    handleContentChange(event){
        const inputValue = event.target.value;
        const inEmpty = inputValue === '';
        this.setState({
            content:inputValue,
            hasContentError:inEmpty,
        });
    }



    handleSubmit() {
        this.setState({isSubmitted: true});
    }

    render() {
        let emailErrorText;

        if(this.state.hasEmailError){
            emailErrorText = (
                <p className='contact-message-error'>
                Fill out your email address!
                </p>
            )
        }
        let contentErrorText;

        if(this.state.hasContentError){
            contentErrorText = (
                <p className='contact-message-error'>
                Please enter your inquiry
                </p>
            );
        }


        let ContactForm;
        if (this.state.isSubmitted){
            ContactForm = ( <div className='contact-submit-message'>
            Complete
            </div>
            );
        }else {
            ContactForm = (

                    <form onSubmit ={()=> {this.handleSubmit()}}>
                    <p>メールアドレス（必須）</p>
                    <input 
                    value = {this.state.email}
                    onChange = {(event) => {this.handleEmailChange(event)}}
                    />

                    {emailErrorText}

                    <p>お問い合わせ内容（必須）</p>
                    <textarea 
                    value = {this.state.content}
                    onChange = {(event)=> {this.handleContentChange(event)}}
                    />
                    {contentErrorText}


                    <input
                    type='submit'
                    value='送信'
                    />
                    </form>
            );
        }

return (
<div className='contact-form'>
{ContactForm}
</div>
);
}
}

export default ContactForm;