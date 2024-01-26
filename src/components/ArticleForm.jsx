import { useSelector } from 'react-redux';
import { Input, TextArea } from '../ui';

const ArticleForm = props => {
	const { isLoading } = useSelector(state => state.article);
	const {
		title,
		setTitle,
		body,
		setBody,
		description,
		setDiscription,
		formSubmit,
	} = props;
	return (
		<div>
			<form onSubmit={formSubmit}>
				<Input label={'Title'} state={title} setState={setTitle} />
				<TextArea
					label={'Description'}
					state={description}
					setState={setDiscription}
				/>
				<TextArea
					label={'Body'}
					state={body}
					setState={setBody}
					height='200px'
				/>
				<button
					className='btn btn-primary w-100 py-2 mt-2'
					type='submit'
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : 'Create'}
				</button>
			</form>
		</div>
	);
};

export default ArticleForm;
