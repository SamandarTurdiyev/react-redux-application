import { useState } from 'react';
import { icon } from '../constatnts';
import { Input } from '../ui';
import { useSelector, useDispatch } from 'react-redux';
import { registerUserStart } from '../slice/auth';

const Register = () => {
	// const [] = useState({ user: '', email: '', password: '' });
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);
	const registerHandler = e => {
		e.preventDefault();
		dispatch(registerUserStart());
	};
	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={icon} alt='' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please Register</h1>
					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input
						label={'Password'}
						type={'password'}
						state={password}
						setState={setPassword}
					/>
					<button
						className='btn btn-primary w-100 py-2 mt-2'
						onClick={registerHandler}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? 'Loading' : 'Register'}
					</button>
				</form>
			</main>
		</div>
	);
};

export default Register;
