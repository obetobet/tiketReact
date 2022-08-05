import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


type CardProps = {
    Cards?:any
}

export const SkeletonCardArtikelHome = (props : CardProps) => {
    return <div className='row'> {Array.from(Array(3), (e, i) => {
        return  <div className="col-lg-4" key={i}>
                <div className='row'>
                    <div className="col-lg-12">
                        <Skeleton  height={220}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton width={100} height={20}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton width={300} height={30}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton width={150} height={20}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-12">
                    <Skeleton  height={20}/>
                    </div>
                </div><br/>
    </div>
                
    
    })}
</div>
    

        
       

}


export const SkeletonHome = () => {
   
        return   <div className='row'>
                    <div className="col-lg-12">
                        <Skeleton  height={520}/>
                    </div>
                </div>
               
        

}

