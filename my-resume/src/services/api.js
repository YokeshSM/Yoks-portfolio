import axios from "axios"

const API="https://66f4f36d77b5e889709afa32.mockapi.io/"

const addUser=(userdata)=>axios.post(`${API}/userinfo`,userdata)
export {addUser}
