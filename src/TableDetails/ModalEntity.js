import axios from 'axios';

const get_customer_url = "http://localhost:8080/get"

class ModalEntity{
    
    getCustomers(){
        return axios.get(get_customer_url);
    }
}

export default  ModalEntity();