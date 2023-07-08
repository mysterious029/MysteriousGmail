import axios from 'axios';

const API_URL = '';

const API_GMAIL = async(urlObject, Payload ,type) =>{
   return await axios({
        method: urlObject.method,
        url: `${API_URL}/${urlObject.endpoint}/${type}`,
        data: Payload
    })
}

export default API_GMAIL;

