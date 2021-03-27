
import axios from 'axios'

//instances are objects of axios we use it to keep different default setting and
//interceptors for different Files. like baseurl not remain same in all files.
// so we make instance of axios

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// if we use instance and we have set this too in defaults it will overwrite that
//instance.interceptors.request

instance.defaults.headers.common['Authentification']="This is instance called from axios instances file"

export default instance;