import axios from 'axios'

export default axios.create({
  baseURL: 'https://crm-react-school.firebaseio.com/'
})