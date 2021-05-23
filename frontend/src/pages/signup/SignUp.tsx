import{auth} from "../../config/firebase-config"
import "firebase/auth";
import firebase from 'firebase'
import React, {useState, useEffect} from 'react'
import {Grid, Paper,Avatar, TextField, Button}  from '@material-ui/core'
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import swal from 'sweetalert'
import {useHistory} from 'react-router-dom'
const SignUp = () => {
  const paperStyle = {padding:20, height:"80vh", width:'320px', margin:"20px auto"}
  const avatarStyle = {
    backgroundColor:'violet'
  }
  const btnStyles = {
    margin:"10px 0 20px 0"
  }
  const gridStyle = {
    alignContent:"center"
  }
  const fieldStyle = {
    margin:"5px 0"
  }
  const initialValues = {
    firstname:"",
    lastname:"",
   email: "",
   password: "",
   confirm_password:""
  };
   const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
     .email("Please enter valid email")
     .required("Email is Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string().oneOf(
     [Yup.ref("password"), null],
     "Both password need to be the same"
    ),
   });
const history = useHistory()
 const [registering, setRegistering] = useState<boolean>(false);

   const signUpWithGoogle = () =>{
      setRegistering(true);
      console.log(auth)
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res)=>{
        console.log(res)
      })
      .catch((error)=>{
        console.log(error)
      })
   }

   
     const signUp = (values: any, props: any) => {
      setTimeout(() => {
       props.resetForm();
       props.setSubmitting(false);
      }, 2000);
      axios
       .post("http://localhost:4500/user/register", values)
       .then((res) => {
        console.log(res.data.result);
        if (res.data.result === "success") {
         swal("Success!", res.data.message, "success");
         history.push("/welcome");
        } else if (res.data.result === "error") {
         swal("Error!", res.data.message, "error");
        }
       })
       .catch((err) => {
        console.error(err);
        swal("Error!", "Unexpected error", "error");
       });

       
     };


  return (
   <div>
    
     <Grid>
      <Paper elevation={10} style={paperStyle}>
       <Grid style={gridStyle}>
        <Avatar style={avatarStyle}>
         <LockOutLinedIcon />
        </Avatar>
        <h2>Sign Up</h2>
       </Grid>

       <Formik
        initialValues={initialValues}
        onSubmit={signUp}
        validationSchema={validationSchema}
       >
        {(props) => (
         <Form>
          <Field
           as={TextField}
           label="Firstname"
           placeholder="Enter Firstname"
           name="firstname"
           fullWidth
           required
           style={fieldStyle}
           helperText={<ErrorMessage name="firstname" />}
          />
          <Field
           as={TextField}
           label="Lastname"
           placeholder="Enter password"
           name="lastname"
           fullWidth
           required
           style={fieldStyle}
           helperText={<ErrorMessage name="lastname" />}
          />
          <Field
           as={TextField}
           label="email"
           placeholder="test@mail.com"
           name="email"
           fullWidth
           style={fieldStyle}
           required
           helperText={<ErrorMessage name="email" />}
          />

          <Field
           as={TextField}
           label="Password"
           placeholder="Enter password"
           name="password"
           fullWidth
           type="password"
           style={fieldStyle}
           required
           helperText={<ErrorMessage name="password" />}
          />
          <Field
           as={TextField}
           label="Confirm Password"
           name="confirm_password"
           placeholder="Confirm password"
           fullWidth
           type="password"
           style={fieldStyle}
           required
           helperText={<ErrorMessage name="confirm_password" />}
          />
          <Button
           type="submit"
           color="primary"
           variant="contained"
           fullWidth
           style={btnStyles}
           disabled={props.isSubmitting}
          >
           {props.isSubmitting ? "Loading" : "Create Account"}
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
        onClick={signUpWithGoogle}
       >
        Sign Up With Google
       </Button>
      </Paper>
     </Grid>
 
   </div>
  );
}

export default SignUp