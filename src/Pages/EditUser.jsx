import React from "react";
import { useEffect, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  GridColumn,
} from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { edit_user } from "../Redux/userReducer";
import { axiosRequest } from "../axios";

const EditUser = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState("");
  const [error, setError] = useState({});
  const [isSubmit,setIsSubmit]=useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userList = async (id) => {
     
      try {
        const res = await axiosRequest.get(`/getdetails/${id}`);
        console.log("response" + JSON.stringify(res.data.getall));
        setType(res.data.getall.type);
        setDescription(res.data.getall.description);
        setCategory(res.data.getall.category);
        setFiles(res.data.getall.files);
      } catch {}
    };
    userList(id);

  }, [id]);

  const submitdata = () => {
    setError(validateForm(type, description, category));
    setIsSubmit(true)
    
    if(Object.keys(error).length===0 && isSubmit) {
   
      dispatch(edit_user({ id, type, description, category }));
      navigate("/");
    }
   
  };
 
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
          <Header>Edit </Header>
          <Segment>
            <Form>
              <Form.Input
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                label="Type"
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
              {files.length>0 && (
                <img src={`https://merncurd.herokuapp.com/${files}`} height="200" alt=""></img>
                // <img src={`http://localhost:5000/${files}`} height="200"  alt=""></img>
              )}
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

export default EditUser;
