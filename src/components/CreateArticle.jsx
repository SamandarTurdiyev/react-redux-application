import { useState } from 'react';
import ArticleForm from './ArticleForm';
import ArticleService from '../service/articles';
import { useDispatch } from 'react-redux';
import {
	postArticleFailure,
	postArticleStart,
	postArticleSuccess,
} from '../slice/article';
import { useNavigate } from 'react-router-dom';
const CreateArticle = () => {
	const [title, setTitle] = useState('');
	const [description, setDiscription] = useState('');
	const [body, setBody] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const formSubmit = async e => {
		e.preventDefault();
		const article = { title, description, body };
		dispatch(postArticleStart());
		try {
			await ArticleService.postArticle(article);
			dispatch(postArticleSuccess());
			navigate('/');
		} catch (error) {
			dispatch(postArticleFailure());
			console.log(error.message);
		}
	};
	const FormProps = {
		title,
		setTitle,
		body,
		setBody,
		description,
		setDiscription,
		formSubmit,
	};
	return (
		<div className='text-center'>
			<h1 className='fs-2'> Create Article</h1>
			<div className='mx-auto w-75'></div>
			<ArticleForm {...FormProps} />
		</div>
	);
};

export default CreateArticle;
