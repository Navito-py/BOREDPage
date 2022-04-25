import axios from 'axios'

export function getThing(){
    return async function(dispatch) {
        try{
            const bored = await axios.get('https://www.boredapi.com/api/activity/')
            return dispatch({
                type: 'GET_BORED_THING',
                payload: bored
            })
        } catch (error){
            alert(error)
        }
    }
}