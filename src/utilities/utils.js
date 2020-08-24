import axios from 'axios';


export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  

export async function sendAxiosPostRequest(url,payloads,token){
    
  return axios({
      url:url,
      data:payloads,
      method:'POST',
      headers: { Authorization:token } 
  })

}