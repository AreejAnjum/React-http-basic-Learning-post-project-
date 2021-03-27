import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'


axios.defaults.baseURL='https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization']='Applied to all types of requests sent either get or post'
axios.defaults.headers.post['Decription']='Applied to only post request'

//inceptors execute before the then of component
axios.interceptors.request.use((request)=>
{console.log(request,'this is the request configuration sent using interceptors')
return request}, (error)=>{  // always return else you will block request
    console.log(error, "this is error handled globally on sending request")
    return Promise.reject(error);  //error rejected and will handle locally by the component
})

axios.interceptors.response.use((response)=>{
    console.log(response, 'This is the response config handled globally on receiving response');
    return response;  // always return else you will block response
}, (error)=>{
    console.log(error, 'This is error handled globally on receiving response')
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
