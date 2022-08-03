import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
    return (
    <div className="about-image-box">
      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-lg-6">
            <div className='row'>
                <div className="col-lg-3">
                    <Skeleton width={150} height={30}/>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-6">
                    <Skeleton width={550} height={50}/>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12">
                    <Skeleton  height={150}/>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-4">
                    <Skeleton  height={50}/>
                </div>
                <div className="col-lg-4">
                    <Skeleton  height={50}/>
                </div>
                <div className="col-lg-4">
                    <Skeleton  height={50}/>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4 pe-4">
          <div className="about-image" style={{animation: 'none', background: 'transparent'}}>
            <Skeleton  height={450}/>
          </div>
        </div>
        {/* <div className="col-lg-12">
            <div className="counter-main w-75 float-start z-index3 position-relative">
                <div className="counter p-4 pb-0 box-shadow bg-white rounded mt-minus">
                    <div className='row'>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <Skeleton  height={50}/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <Skeleton  height={50}/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <Skeleton  height={50}/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <Skeleton  height={50}/>
                        </div>
                    </div> 
                </div>
            </div>     
        </div> */}
      </div>
    </div>
        

    );

}
export default SkeletonCard;