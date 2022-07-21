import AuthService from "../../service/auth.service";
import { Component, ReactNode } from "react";
import UserModel from "../../models/user";
import { Navigate  } from "react-router-dom";
type Props = {};

type State = {
    navigate: string | null,
  userReady: boolean,
  currentUser: UserModel & { access: string }
}
export default class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
            navigate: null,
          userReady: false,
          currentUser: { access: "" }
        };
      }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        
        if (!currentUser) this.setState({navigate: "/" });
        this.setState({ currentUser: currentUser, userReady: true })
      }

      render(){
        if (this.state.navigate) {
            return <Navigate  to={this.state.navigate} />
          }
      
          const { currentUser } = this.state;
        return (
            <>
             {(this.state.userReady) ?
                <a  href="#"   className="me-3 userlog" ><i className="icon-user" />{currentUser.email}</a>
                :
                <a  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"  className="me-3 userlog" ><i className="icon-user" /> Login</a>
             }
       
                
            </>
        );
      }

    
}