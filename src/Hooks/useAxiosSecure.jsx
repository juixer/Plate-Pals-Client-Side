import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {
  const {logOut} = useAuth()
  const navigate = useNavigate()

  useEffect(()=> {
    axiosSecure.interceptors.response.use(res => {
        return res;
    }, error => {
        console.log('error in axios', error.response);
        if(error.response.status === 401 || error.response.status === 403) {
            logOut()
            .then(()=>{
                navigate('/login')
               }) 
               .catch(err => console.log(err.message))
        }
    })
  },[])
};

export default useAxiosSecure;