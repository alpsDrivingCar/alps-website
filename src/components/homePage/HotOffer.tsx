import alert from '/images/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HotOffer = ()=>{

  return (
    <div className="container w-75 hot-offer">
      <div className="row g-5">
        <div className="col-md-6 position-relative">
          <div className="container-card w-100">
            <div className="header-card d-flex align-items-start justify-content-between py-5 px-4">
              <div className="header-text">
                <h3>Updating skills</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas?</p>
              </div>
              <div className="image d-flex align-items-center justify-content-center">
                <img src={alert} width="100" height="100" />
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li className='d-flex'>
                  <div className='icon-list'>
                    <FontAwesomeIcon icon='exclamation-triangle' className='text-danger' type='button'  />

                  </div>
                  <div className='text-list mx-3'>
                    <h6>Learn</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </li>
                <li className='d-flex'>
                  <div className='icon-list'>
                    <FontAwesomeIcon icon='exclamation-triangle' className='text-danger' type='button'  />

                  </div>
                  <div className='text-list mx-3'>
                    <h6>Learn</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </li>
                <li className='d-flex'>
                  <div className='icon-list'>
                    <FontAwesomeIcon icon='exclamation-triangle' className='text-danger' type='button'  />

                  </div>
                  <div className='text-list mx-3'>
                    <h6>Learn</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </li>
                <li className='d-flex'>
                  <div className='icon-list'>
                    <FontAwesomeIcon icon='exclamation-triangle' className='text-danger' type='button'  />

                  </div>
                  <div className='text-list mx-3'>
                    <h6>Learn</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='more-details  px-5'>
              <p className='price fw-bold fs-3 mx-5'>48$</p>
              <button className='entry-btn'>Entry </button>
            </div>
           
          </div>
        </div>
        <div className="col-md-6 position-relative">
          <div className="container-card w-100">
            <div className="header-card d-flex align-items-start justify-content-between py-5 px-4">
              <div className="header-text">
                <h3>Updating skills</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas?</p>
              </div>
              <div className="image d-flex align-items-center justify-content-center">
                <img src={alert} width="100" height="100" />
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li className='d-flex'>
                  <div className='icon-list'>
                    <FontAwesomeIcon icon='exclamation-triangle' className='text-danger' type='button'  />

                  </div>
                  <div className='text-list mx-3'>
                    <h6>Learn</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </li>
                <li className='d-flex'>
                  <div className='icon-list'>
                    <FontAwesomeIcon icon='exclamation-triangle' className='text-danger' type='button'  />

                  </div>
                  <div className='text-list mx-3'>
                    <h6>Learn</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </li>
                <li className='d-flex'>
                  <div className='icon-list'>
                    <FontAwesomeIcon icon='exclamation-triangle' className='text-danger' type='button'  />

                  </div>
                  <div className='text-list mx-3'>
                    <h6>Learn</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </li>
                <li className='d-flex'>
                  <div className='icon-list'>
                    <FontAwesomeIcon icon='exclamation-triangle' className='text-danger' type='button'  />

                  </div>
                  <div className='text-list mx-3'>
                    <h6>Learn</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='more-details  px-5'>
              <p className='price fw-bold fs-3 mx-5'>48$</p>
              <button className='entry-btn'>Entry </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )


}

export default HotOffer;