const { newsAPIkey } = require('../secret.json')
const axios = require('axios')


async function getNews(q, from, sortBy='popularity') {
	const url = 'https://newsapi.org/v2/everything'

	try {
		const response = await axios.get(url, {
			params: {
				q: q,
				from: from,
				sortBy: sortBy,
				apiKey: newsAPIkey
			}
		});
		return response
	} catch (error) {
		console.error(error);
	}

	let req = new Request(url);

	fetch(req)
	.then(function(response) {
	console.log(response.json());
	})
}

async function test() {
	let r = await getNews('엔비디아', '2024-06-28')
	console.log(r.data)
}

test()