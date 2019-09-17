import Axios from 'axios';

const instance= Axios.create({
  baseURL:'https://react-my-burger-c9f7e.firebaseio.com/'  
});


export default instance;