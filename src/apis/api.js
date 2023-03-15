import axios from 'axios'

export default class NewsApi {
    static async getNews() {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-02-15&sortBy=publishedAt&apiKey=134f716502564871b5609dbc72503894')
            return response.data.articles
        } catch(e) {
            console.log('ERROR', e)
        }
    }

    static async getComments() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
            return response.data
        } catch(e) {
            console.log('ERROR', e)
        }
    }
    static async getUser() {
        try {
            const response = await axios.get(`https://randomuser.me/api/`)
            return {...response.data.results[0]}
        } catch (e) {
            console.log('ERROR', e);
        }
    }
}