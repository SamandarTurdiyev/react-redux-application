import { Link } from 'react-router-dom';
import { logo } from '../constatnts';

const Navbar = () => {
	return (
		<>
			<div class='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container py-1'>
				<div className='w-25'>
					<Link to={'/'}>
						<img src={logo} alt='' />
					</Link>
				</div>

				<nav class='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
					<Link
						className='me-3 py-2 link-body-emphasis text-decoration-none'
						to={'/login'}
					>
						Login
					</Link>
					<Link
						className='me-3 py-2 link-body-emphasis text-decoration-none'
						to={'/register'}
					>
						Register
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
