

type LoginProps = {
    isLogined?: boolean
}


export const Loginuser = (props : LoginProps) => {
    return (
        <>
        {props.isLogined ? <a style={{marginLeft:'20px'}} href="#"   className="me-3" ><i className="icon-user" /></a> : <a style={{marginLeft:'20px'}} href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"  className="me-3" ><i className="icon-user" /></a>
        
        
        }
            
                
                
                
               
                
                
            
        </>
    );
}