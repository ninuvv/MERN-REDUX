import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  GridColumn,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import  {create_user} from '../Redux/userReducer'


const AddUser = () => {


  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [files,setFiles]=useState('')
  const [error,setError]=useState({})
  const [isSubmit,setIsSubmit]=useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

 const submitdata =  () => {
  setError(validateForm(type,description,category))
  setIsSubmit(true)
 

  
  };
  useEffect(() => {
    if(Object.keys(error).length===0 && isSubmit){
                const formData=new FormData();
        formData.append('type',type)
        formData.append('description',description)
        formData.append('category',category)
        if(files)
          formData.append('files',files)
      
         dispatch(create_user(formData))
          navigate("/");
        }
  }, [error, type,dispatch, description, category,isSubmit,files,navigate])
  

  const validateForm=(type,description,category)=>{
    const errors={}
    if(!type)
    errors.topic="Topic not found"

    if(!description)
    errors.description="Description not found"

    if(!category)
    errors.category="category not found"
    return errors
  }
  return (
    <div>
      <Grid centered>
        <GridColumn style={{ maxWidth: 700, margin: 50 }}>
          <Header>Create  </Header>
          <Segment>
            <Form>
              <Form.Input
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                label="Topic"
                placeholder="Type"
                id="form-input-first-name"
              />
              <p style={{color:"red"}}>{error.topic}</p>
              <Form.Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                label="Description"
                placeholder="Description"
              />
               <p style={{color:"red"}}>{error.description}</p>
              <Form.Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                label="Category"
                placeholder="Category"
              />         
             <p style={{color:"red"}}>{error.category}</p>

           <input type="file" id="file"    onChange={(e) => setFiles(e.target.files[0])} />
              <Button onClick={submitdata} fluid primary type="submit">
                Submit
              </Button>
            </Form>
          </Segment>
        </GridColumn>
      </Grid>
    </div>
  );
};

export default AddUser;
