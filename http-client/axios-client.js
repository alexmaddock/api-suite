import axios from 'axios';

export const axio = async () =>  {

    let outcome = await axios({
        method: 'get',
        url: 'https://securepubads.g.doubleclick.net/pagead/ppub_config?ippd=stackoverflow.com'
    })
    
    try {
        return outcome;
    }
    catch(e) {
        throw e
    }

}


