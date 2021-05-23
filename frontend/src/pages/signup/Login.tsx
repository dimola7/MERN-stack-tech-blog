import React, {useState, useEffect} from "react";
import {
 Grid,
 Paper,
 Avatar,
 TextField,
 Button,
 Typography,
 Link,
} from "@material-ui/core";
import firebase from 'firebase'
import { auth } from "../../config/firebase-config";

import {useHistory} from "react-router-dom"
import swal from "sweetalert";
import axios from "axios";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


export  const getCurrentUser =() =>{
 return auth.currentUser;
}
const Login = ({ handleChange}: any) => {
 let history = useHistory();

 const paperStyle = {
  padding: 20,
  height: "70vh",
  width: "320px",
  margin: "20px auto",
 };
 const avatarStyle = {
  backgroundColor: "violet",
 };
 const btnStyles = {
  margin: "10px 0 20px 0",
 };
 const fieldStyle = {
  margin: "20px 0",
 };
 const initialValues = {
  email: "",
  password: "",
 };
 const validationSchema = Yup.object().shape({
  email: Yup.string()
   .email("Please enter valid email")
   .required("Email is Required"),
  password: Yup.string().required("Required"),
 });

 const handleLogin = (values: any, props: any) => {
  setTimeout(() => {
   props.resetForm();
   props.setSubmitting(false);
  }, 2000);

  axios
   .post("http://localhost:4500/user/login", values)
   .then((res) => {
    console.log(res.data.result);
    if (res.data.result === "success") {
     swal("Success!", res.data.message, "success");
    } else if (res.data.result === "error") {
     swal("Error!", res.data.message, "error");
    } else if (res.data.result === "passwordmismatch") {
     swal("Error!", res.data.message, "error");
    } else if (res.data.result === "notfound") {
     swal("Error!", res.data.message, "error");
    }
   })
   .catch((err) => {
    swal("Error!", "Unexpected error", "Error");
   });

 
  history.push("/welcome");
 };
 //Use effect
 const [verify, setVerify] = useState(false)
 const loginWithGoogle = () => {

  auth
   .signInWithPopup(new firebase.auth.GoogleAuthProvider())
   .then((res) => {
     console.log(res);
     if(res.user?.displayName){
        swal("Welcome!", res.user?.displayName.split(' ')[0], "success");
     }
   history.push("/welcome");
   })
   .catch((error) => {
    console.log(error);
   });

  
 };

 const loginWithFacebook = () =>{
   setVerify(true)
    auth
     .signInWithPopup(new firebase.auth.FacebookAuthProvider())
     .then((res) => {})
     .catch((error) => {
      console.log(error);
     });

    history.push("/welcome");
    setVerify(false)
 }

 const loginWithGithub = () => {
  setVerify(true);
  auth
   .signInWithPopup(new firebase.auth.GithubAuthProvider())
   .then((res) => {})
   .catch((error) => {
    console.log(error);
   });

  history.push("/welcome");
  setVerify(false);
 };

 return (
  <div>
   <Grid>
    <Paper elevation={10} style={paperStyle}>
     <Grid alignContent="center">
      <Avatar style={avatarStyle}>
       <LockOutLinedIcon />
      </Avatar>
      <h2>Sign In</h2>
     </Grid>

     <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
     >
      {(props) => (
       <Form>
        <Field
         as={TextField}
         label="email"
         name="email"
         placeholder="Enter email"
         fullWidth
         required
         style={fieldStyle}
         helperText={<ErrorMessage name="email" />}
        />
        <Field
         as={TextField}
         label="Password"
         placeholder="Enter password"
         name="password"
         type="password"
         fullWidth
         required
         helperText={<ErrorMessage name="password" />}
        />
        <Button
         type="submit"
         color="primary"
         variant="contained"
         fullWidth
         style={btnStyles}
         disabled={props.isSubmitting}
        >
         {" "}
         {props.isSubmitting ? "Loading" : "Sign In"}
        </Button>
       </Form>
      )}
     </Formik>
     <Button
      type="submit"
      color="primary"
      variant="contained"
      fullWidth
      style={btnStyles}
      onClick={loginWithGoogle}
     >
      Sign In With Google
     </Button>

     <Button
      type="submit"
      color="primary"
      variant="contained"
      fullWidth
      style={btnStyles}
      disabled={verify}
      onClick={loginWithFacebook}
     >
      Sign In With Facebook
     </Button>

     <Button
      type="submit"
      color="primary"
      variant="contained"
      fullWidth
      style={btnStyles}
      disabled={verify}
      onClick={loginWithGithub}
     >
      Sign In With Github
     </Button>
     <Typography>
      Haven't signed up?
      <Link href="#" onClick={() => handleChange("event", 1)}>
       Sign up
      </Link>
     </Typography>
    </Paper>
   </Grid>
  </div>
 );
};

export default Login;
