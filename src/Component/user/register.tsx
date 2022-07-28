import { Component } from "react";
import { Formik , Field , Form, ErrorMessage } from "formik";
import * as yup from 'yup';

import AuthService from "../../service/auth.service";

type Props = {};

type State = {
  username: string,
  email: string,
  password: string,
  successful: boolean,
  message: any
};

export default class Register extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: []
    };
  }

  validationSchema() {
    return yup.object().shape({
      username: yup.string()
      .required("This field is required!")
        .test(
          "len",
          "The username must be between 3 and 20 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
        )
        ,
      email: yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
      first_name: yup.string()
        .required("This field is required!")
        .test(
            "len",
            "The First Name must be between 3 and 40 characters.",
            (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 40
        ),
      last_name: yup.string()
        .required("This field is required!")    
        .test(
            "len",
            "The Last Name must be between 3 and 20 characters.",
            (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
        ),
        
      password: yup.string()
      .required("This field is required!")
        .test(
          "len",
          "The password must be between 6 and 40 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 6 &&
            val.toString().length <= 40
        )
        ,
        password2: yup.string()
        .test('passwords-match', 'Passwords must match', function(value){
            return this.parent.password === value
          })
        .required("This field is required!"),
    });
  }

  handleRegister(formValue: { username: string; email: string; password: string,password2 : string,first_name : string,last_name  : string }) {
    const { username, email, password,password2,first_name,last_name } = formValue;

    this.setState({
      message: "",
      successful: false
    });

    AuthService.register(
      username,
      email,
      password,
      password2,
      first_name,
      last_name 
    ).then(
      response => {
        console.log(response)
        this.setState({
          message: 'sukses',
          successful: true
        });
      },
      error => {
        console.log(error.response.data.username)
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();



        this.setState({
          successful: false,
          message: resMessage,
          username : error.response.data.username,
          email : error.response.data.email,
          password : error.response.data.password,
        });
      }
    );
  }

  render() {
    const { successful, message,username,email,password } = this.state;

    const initialValues = {
      username: "",
      email: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: ""
    };

    return (
    
        <Formik
        initialValues={initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.handleRegister}
        >
        <Form>
            {!successful && (
            <div>
                <div className="form-group mb-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <Field name="username" type="text" className="form-control" id="fname1"  placeholder="User Name"/>
                            <ErrorMessage
                            name="username"
                            component="div"
                            className="alert alert-danger"
                            /><div className={successful ? "alert alert-success" : "alert alert-danger" }role="alert">{username}</div>
                            
                                
                           
                            
                            
                        </div>
                        <div className="col-lg-6">
                            <Field name="email" type="email" className="form-control" id="femail"  placeholder="Email"/>
                            <ErrorMessage
                            name="email"
                            component="div"
                            className="alert alert-danger"
                            /><div className={successful ? "alert alert-success" : "alert alert-danger" }role="alert">{email}</div>
                        </div>
                       
                    </div>
                    
                </div>
                <div className="form-group mb-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <Field name="first_name" type="text" className="form-control" id="fname1"  placeholder="First Name"/>
                            <ErrorMessage
                            name="first_name"
                            component="div"
                            className="alert alert-danger"
                            />
                        </div>
                        <div className="col-lg-6">
                            <Field name="last_name" type="text" className="form-control" id="fname1"  placeholder="Last Name"/>
                            <ErrorMessage
                            name="last_name"
                            component="div"
                            className="alert alert-danger"
                            />
                        </div>
                       
                    </div>
                    
                </div>
                <div className="form-group mb-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <Field name="password" type="password" className="form-control" id="lpass1"  placeholder="Password"/>
                            <ErrorMessage
                            name="password"
                            component="div"
                            
                            className="alert alert-danger"
                            /><div className={successful ? "alert alert-success" : "alert alert-danger" }role="alert">{password}</div>
                        </div>
                        <div className="col-lg-6">
                            <Field name="password2" type="password" className="form-control" id="lrepass"  placeholder="Re Password"/>
                            <ErrorMessage
                            name="password2"
                            component="div"
                            className="alert alert-danger"
                            />
                        </div>
                       
                    </div>
                    
                </div>



                <div className="comment-btn mb-2 pb-2 text-center border-b">
                      <input type="submit" className="nir-btn w-50" id="submit" defaultValue="Login" />
                    </div>
               
            </div>
            )}

           
        </Form>
        </Formik>
      
    );
  }
}