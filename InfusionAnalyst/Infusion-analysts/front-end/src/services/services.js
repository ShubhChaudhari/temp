import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const Login = (data)=>{
  return  axios.post(`${baseUrl}/user/login`,data)
  // .then(response => {
  //   return response.data;
  // })
  // .catch(error => {
  //   return console.error(error);
  // });
}

export const Signup = (data)=>{
  return axios.post(`${baseUrl}/user/signup`,data)
// .then(response => {
//   return response.data;
// })
// .catch(error => {
//   return console.error(error);
// });
}