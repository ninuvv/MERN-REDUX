import React from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import Header from "../Components/Header";
import {axiosRequest} from '../axios'
import { useEffect } from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import  {delete_user,getall} from '../Redux/userReducer'
import { useDispatch, useSelector } from "react-redux";
const Home = () => {

const [userList,setUserList]=useState([])

const dispatch = useDispatch();
//  const users=useSelector(state=>state.user.value)
//  console.log(users)
const navigate = useNavigate();
console.log("Ninu")
  useEffect(() => {
    console.log("Ninu")
// dispatch(getall)
    const getUser=async()=>{
      try {
        const res=await axiosRequest.get(`/getAll`);
        setUserList(res.data.users)
      } catch {    
      }
    }
 getUser()
  }, [userList])
  
 const editUser=(id)=>{
  navigate(`/edit/${id}`);
 }
 const deleteUser=(id)=>{
  console.log(id);
  dispatch(delete_user({id}))
  const getUser=async()=>{
    try {
      const res=await axiosRequest.get(`/getAll`);
      setUserList(res.data.users)
    } catch {    
    }
  }
getUser()
  
}

      return (
        
        <div>
          <Header />
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Topic</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>       
           <Table.Body  >
                 
            {userList.map((user) => {  
               return( <Table.Row key={user._id}>
                <Table.Cell>{user.type}</Table.Cell>
                <Table.Cell>{user.description}</Table.Cell>
                <Table.Cell>{user.category}</Table.Cell>
                <Table.Cell>
                  <Button onClick={()=>{editUser(user._id)}}><Icon name="edit"></Icon>Edit</Button>
                  <Button onClick={()=>{deleteUser(user._id)}}><Icon name="delete"></Icon>Delete</Button>
                </Table.Cell>
              </Table.Row>)
            }) }
             
            
            </Table.Body>
          
          </Table>
        </div>
      );
  
   
};

export default Home;
