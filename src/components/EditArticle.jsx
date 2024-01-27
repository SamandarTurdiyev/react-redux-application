import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
} from '../slice/article';
import ArticleService from '../service/articles';
import { useParams } from 'react-router-dom';
import ArticleForm from './ArticleForm';

const EditArticle = () => {
	const [title, setTitle] = useState('');
	const [description, setDiscription] = useState('');
	const [body, setBody] = useState('');
	const dispatch = useDispatch();
	const { slug } = useParams();
	useEffect(() => {
		const getArticleDetail = async () => {
			dispatch(getArticleDetailStart());
			try {
				const response = await ArticleService.getArticleDetail(slug);
				setTitle(response.article.title);
				setBody(response.article.body);
				setDiscription(response.article.description);
				dispatch(getArticleDetailSuccess(response.article));
			} catch (error) {
				dispatch(getArticleDetailFailure());
			}
		};
		getArticleDetail();
	}, []);
	const formSubmit = () => {};
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
		<div className='text-center '>
			<h1 className='fs-2'> Edit Article</h1>
			<div className='mx-auto w-75'>
				<ArticleForm {...FormProps} />
			</div>
		</div>
	);
};

export default EditArticle;
