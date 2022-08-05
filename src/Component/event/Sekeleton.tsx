import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


type CardProps = {
    Cards?:any
}

export const SkeletonCardEventHome = (props : CardProps) => {
  
    return <div className='row'> {Array.from(Array(props.Cards), (e, i) => {
        return  <div className="col-lg-4" key={i}>
                <div className='row'>
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-10">
                    <Skeleton  height={320}/>
                    </div>
                    <div className="col-lg-1">
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-10">
                    <Skeleton  height={30}/>
                    </div>
                    <div className="col-lg-1">
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-10">
                    <Skeleton  height={30}/>
                    </div>
                    <div className="col-lg-1">
                    </div>
                </div><br/>
    </div>
                
    
    })}
</div>
    

        
       

}

export const SkeletonCardEventDetails = () => {
    return (
        <div className='row'>
            <div className="col-lg-8">
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton width={400}  height={22}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton width={250} height={22}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton  height={300}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-3">
                    <Skeleton  height={20}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-10">
                    <Skeleton  height={90}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-3">
                    <Skeleton  height={20}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-3">
                    <Skeleton  height={60}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton  height={60}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton  height={60}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton  height={60}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-3">
                    <Skeleton  height={20}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton  height={270}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-3">
                    <Skeleton  height={30}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-6">
                    <Skeleton  height={30}/>
                    </div>
                    <div className="col-lg-6">
                    <Skeleton  height={30}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton  height={90}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-2">
                    <Skeleton  height={30}/>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
            
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton  height={300}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-3">
                    <Skeleton  height={30}/>
                    </div>
                </div><br/>
                <div className='row'>
                    <div className="col-lg-3">
                    <Skeleton width={100}  height={35}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton width={100} height={35}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton width={100} height={35}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton width={100}  height={35}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton width={100} height={35}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton width={100} height={35}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton width={100} height={35}/>
                    </div>
                    <div className="col-lg-3">
                    <Skeleton width={100} height={35}/>
                    </div>
                </div>
            </div>
        </div>     
    );
    

}


export const SkeletonEventList = (props : CardProps) => {
    
    return <div className='container'> 
            <div className='row'> 
                <div className="col-lg-4">
                
                </div> 
                <div className="col-lg-4">
                <Skeleton height={40}/>
                </div>
                <div className="col-lg-4">
                
                </div><br/>   
            
            </div><br/>
            <div className='row'>
        {Array.from(Array(props.Cards), (e, i) => {

     return   <div className="col-lg-3 col-md-6 col-sm-6 mb-3" key={i}>
                <Skeleton height={300} count={5}/>
            </div>
    
        })}  
    </div>
    </div> 
    

}