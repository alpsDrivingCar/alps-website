import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BaseInfo = ()=>{

  return(
    <div className='base-info container'>
      <div className='header'>
        <h3 className='header-title'>On-line Learning</h3>
        <p className='header-description'>
        check the quality of our lectures, and do not go to a lec
           ture the driving school anymore
        </p>
      </div>
      <div className='details d-flex justify-content-center align-content-center'>
        <div className='item'>
          <div className='item-header'>
            <FontAwesomeIcon icon='exclamation-triangle' className='text-danger icon' type='button'  />
            <span className='item-title'>Facebook</span>
          </div>
          <p className='item-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto.</p>
        </div>
        <div className='item'>
          <div className='item-header'>
            <FontAwesomeIcon icon='exclamation-triangle' className='text-danger icon' type='button'  />
            <span className='item-title'>Facebook</span>
          </div>
          <p className='item-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto.</p>
        </div>
        <div className='item'>
          <div className='item-header'>
            <FontAwesomeIcon icon='exclamation-triangle' className='text-danger icon' type='button'  />
            <span className='item-title'>Facebook</span>
          </div>
          <p className='item-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto.</p>
        </div>
        
     
      </div>
      <div className='videos container d-flex justify-content-center align-content-center' >
        <div className='item'>
          <video controls height='400' width='400' className='mx-2 my-2'>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
Your browser does not support the video tag.
          </video>
          <p>check the quality of our lectures, and do not go to a lec
ture the driving school anymore</p>
        </div>
        <div className='item'>
          <video controls height='400' width='400' className='mx-2 my-2'>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
Your browser does not support the video tag.
          </video>
          <p>check the quality of our lectures, and do not go to a lec
ture the driving school anymore</p>
        </div>
 

      </div>
    </div>
  )
}

export default BaseInfo
