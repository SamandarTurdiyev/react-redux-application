import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleService from '../service/articles';
import { useDispatch } from 'react-redux';
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
} from '../slice/article';
const ArticleDetail = () => {
	const dispatch = useDispatch(state => state.article);
	const { slug } = useParams();

	useEffect(() => {
		const getArticleDetail = async () => {
			dispatch(getArticleDetailStart());
			try {
				const response = await ArticleService.getArticleDetail(slug);
				dispatch(getArticleDetailSuccess(response.article));
			} catch (error) {
				dispatch(getArticleDetailFailure());
			}
		};
		getArticleDetail();
	}, [slug]);
	return <div>slug: {slug}</div>;
};

export default ArticleDetail;
