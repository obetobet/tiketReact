import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


type CardProps = {
    Cards?:any
}

export const SkeletonCardEventHome = (props : CardProps) => {
    const myArray = ['Ranjeet', 'Adil', 'Preet'];  


  
    return <div className='row'> {Array.from(Array(props.Cards), (e, i) => {
        return  <div className="col-lg-4">
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
            <div className="col-lg-4">
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
                
    );
    

}