import axios from "axios";

const URL = 'https://pixabay.com/api/';
const API_KEY = '35915328-071ea681ff72ae8950359838e';


export const getImages = async(text, count) =>{
    try{
        const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log('Error while calling the api', error.message);
    }
}