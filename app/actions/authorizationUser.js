import { Api } from '../api'

const api = new Api({ host: 'https://api.base.mozgo.com' })

export function authorizationSuccess(data) {
  alert('RegistrSuccess' + JSON.stringify(data))
  return {
    type: 'REGISTRATION_SUCCESS',
    payload: data
  }
}


export default function authorizationUser(email, password) {
  return async (dispatch) => {
    let auth = await api.login({ email: "pandos1998@gmail.com", password: "lebron123" })
    console.warn(auth)
    // fetch('https://api.base.mozgo.com/players', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept' : 'application/json'
    //     },
    //     body: JSON.stringify({
    //         'email' : email, 
    //         'password' : password, 
    //     })
    // })
    // .then(res => {
    //     if(res.status !== 200) {
    //         alert(res.statusText)
    //     }
    //     return res
    // })
    // .then( res => res.json() )
    // .then( data => dispatch( registrationSuccess(data) ) )
    // .catch( e => console.log( 'Error' + e ) )
  }
}
