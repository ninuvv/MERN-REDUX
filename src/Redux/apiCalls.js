import {axiosRequest} from '../axios'
import { edit_user,create_user ,delete_user} from './userReducer'

export const CreateUser= async(dispatch,{type, description, category})=>{
    try {
       const res= await axiosRequest.post(`/save`,{type, description, category})
       dispatch(create_user(res.data))
    } catch{
        dispatch()
     }
 }

 export const editUser= async(dispatch,{id,type, description, category})=>{
    try {
       const res= await axiosRequest.put(`/update/${id}`,{type, description, category})
       dispatch(edit_user(res.data))
    } catch{ 

     }
 }

 
export const deleteUser= async(dispatch,{id})=>{
    try {
       const res= await axiosRequest.post(`/delete/${id}`)
       dispatch(delete_user(res.data))
    } catch{ 

     }
 }