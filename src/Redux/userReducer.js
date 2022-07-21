 import {createSlice} from '@reduxjs/toolkit';
import { axiosRequest } from '../axios';

 export const userSlice=createSlice({
    name:"user",
    initialState:{
        value:[],
   
    },
    reducers:{
        create_user:async(state,action)=>{    
            console.log("create redux"+action.payload )
            
             state.value= await axiosRequest.post(`/save`,action.payload)
           
        },
 
        edit_user:async(state,action)=>{
            console.log("edit redux"+action )
            const {id,type, description, category}=action.payload
            state.value= await axiosRequest.put(`/update/${id}`,{type, description, category})

        },
        delete_user:async(state,action)=>{
                       const {id}=action.payload
            console.log("id",id )
           state.value=await axiosRequest.delete(`/delete/${id}`)
        }
    }
 })
 export const { create_user,edit_user,delete_user}=userSlice.actions;
 export default userSlice.reducer;
