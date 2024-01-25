import { useEffect, useState } from 'react';
import { icon } from '../constatnts';
import { Input } from '../ui';
import { useSelector, useDispatch } from 'react-redux';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import { ValidationError } from './';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	// const [] = useState({ user: '', email: '', password: '' });
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isLoading, loggedIn } = useSelector(state => state.auth);
	const navigate = useNavigate();

	const registerHandler = async e => {
		e.preventDefault();
		dispatch(signUserStart());
		const user = { username: name, email, password };
		try {
			const response = await AuthService.userRegister(user);
			dispatch(signUserSuccess(response.user));
			navigate('/');
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors));
		}
	};
	useEffect(() => {
		if (loggedIn) {
			navigate('/');
		}
	}, []);
	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={icon} alt='' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please Register</h1>
					<ValidationError />
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
