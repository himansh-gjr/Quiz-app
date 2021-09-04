import axios from 'axios'

export const api = axios.create({
    baseURL:`https://quiz-app-techdom.herokuapp.com/api`
})