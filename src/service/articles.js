import axios from 'axios';
const ArticleService = {
	async getArticles() {
		const { data } = await axios.get('/articles');
		return data;
	},
	async getArticlesDetail(slug) {
		const { data } = await axios.get(`/articles/${slug}`);
		return data;
	},
};

export default ArticleService;
