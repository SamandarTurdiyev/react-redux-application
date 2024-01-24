const Input = ({ label, state, setState, type = 'text' }) => {
	return (
		<div class='form-floating'>
			<input
				type={type}
				class='form-control'
				id='floatingInput'
				value={state}
				placeholder={label}
				onChange={e => setState(e.target.value)}
			/>
			<label for='floatingInput'>{label}</label>
		</div>
	);
};

export default Input;
