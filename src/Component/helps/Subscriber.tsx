

type LoginProps = {
    isLogined?: boolean
}


export const Subscriber = (props : LoginProps) => {
    return (
        <>
        {props.isLogined ? <a  href="#"   className="me-3 userlog" ><i className="icon-user" /></a> : <a  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"  className="me-3 userlog" ><i className="icon-user" /> Login</a>
        }
            
                
                
                
               
                
                
            
        </>
    );
}