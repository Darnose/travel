import { useEffect, useState } from 'react'

const Registration = () => {
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [emailError, setEmailError] = useState('Incorrectly entered email');
	const [passwordError, setPasswordError] = useState('Password cannot be empty');
	const [formValid, setFormValid] = useState(false);

	useEffect (() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])

	const loginHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setEmail(e.target.value)
		let valid_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

		if (!valid_email.test(e.target.value)){
			setEmailError('Email is not valid')
		} else {
			setEmailError('')
		}
	}

	const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPassword(e.target.value)
		let valid_password = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;

		if (!valid_password.test(e.target.value)){
			setPasswordError("Password must have at least one uppercase ('A'-'Z')")
		} else {
			setPasswordError('')
		}
	}
	
	const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
		switch (e.target.name) {
			case 'login' :
				setEmailDirty(true)
				break
			case 'password' :
				setPasswordDirty(true)
				break
			
		}
	}

    return (
        <main>
            <form action="#" className='authorization'>
                <h1>
					Registration form
                </h1>
                <input onChange={e => loginHandler(e)}
					   value={email.trim()} 
					   onBlur={e => blurHandler(e)} 
					   type="email" 
					   className='authorization__email' 
					   placeholder='Enter email' 
					   name='email' />
                {(emailError && emailDirty) && <span className='error__msg'>{emailError}</span>}
                <input onChange={e => passwordHandler(e)} 
					   value={password.trim()} 
					   onBlur={e => blurHandler(e)} 
					   type="password" 
					   className='authorization__password' 
					   placeholder='Enter password' 
					   name='password'/>
                {(passwordError && passwordDirty) && <span className='error__msg'>{passwordError}</span>}
                <button disabled={!formValid} type='submit' className='authorization__btn'>
                    Sign in
                </button>
            </form>
        </main>
    )
}

export default Registration;