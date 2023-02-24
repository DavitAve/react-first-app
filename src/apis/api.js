import axios from 'axios'

export default class NewsApi {
    static async getNews() {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-01-24&sortBy=publishedAt&apiKey=134f716502564871b5609dbc72503894')
            return response.data.articles
        } catch(e) {
            console.log(e)
        }
    }
}