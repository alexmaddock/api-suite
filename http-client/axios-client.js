import axios from 'axios';

export const axio = async () =>  {
    
    try {
        let outcome = await axios({
            method: 'get',
            url: 'https://securepubads.g.doubleclick.net/pagead/ppub_config?ippd=stackoverflow.com'
        })
        
        return outcome;
    }
    catch(e) {
        throw e
    }

}


