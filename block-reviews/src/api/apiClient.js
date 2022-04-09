import axios from 'axios';


const client = axios.create({
    // 테스트 로컬
    // baseURL: 'https://localhost:44387/api',    
    // 배포 서버
    baseURL: 'http://3.35.203.53/api',    
    timeout: 100000,
    headers:{ 
        "Content-Type": 'application/json;charset=UTF-8',
        "Access-Control-Allow-Orisgin": "*",
        "Accept": "application/json"
    }
  });

export default client;