import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { History } from 'history';
import AuthService from "../../service/auth.service";
import { RouteComponentProps,} from '@reach/router';
import Response from "../../models/response";
  import axios from "axios";
interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  username: string,
  password: string,
  loading: boolean,
  message: string
};

export default class LoginForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string().required("This field is required!"),
      password: Yup.string().required("This field is required!"),
    });
  }


  handletoket(username :any, password:any){
    let res = axios.post('http://obet.pythonanywhere.com/api-token-auth/' ,{username, password})
            .then(response => {
                    localStorage.setItem("toket", JSON.stringify(response.data.token));  
                    return response.data.token;
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
  }
  handleLogin(formValue: { username: string; password: string }) {
    const { username, password } = formValue;
    
    this.handletoket(username, password)
    
    this.setState({
      message: "",
      loading: true
    });


    AuthService.login(username, password).then(
        
      () => {      
        window.location.href='/user-profile'
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    const { loading, message } = this.state;

    const initialValues = {
      username: "",
      password: "",
    };

    return (

          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleLogin}
          >
            <Form>
                <div className="form-group mb-2">
                    <Field name="username" type="text" className="form-control" id="fname"  placeholder="UserName"/>
                    <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                    />
                </div>

                <div className="form-group mb-2">
                    <Field name="password" type="password" className="form-control" id="fname"  placeholder="password"/>
                    <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                    />
                </div>

       

              <div className="comment-btn mb-2 pb-2 text-center border-b">
                <button type="submit" className="nir-btn w-50" id="submit" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
       
    );
  }
}