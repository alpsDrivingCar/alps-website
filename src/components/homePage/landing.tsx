import car from '/images/car.png'
const Landing = ()=>{
  return (
    <div className='landing'>
      <div className='container d-flex align-items-center'>
        <div className='text'>
          <h1 className='text-heading' >welcome to <span>
          alps
          </span> driving school</h1>
          <p className='text-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reiciendis, dolore nihil blanditiis aperiam deserunt..</p>
          <div className='button d-flex align-content-center'>
            <button className='entry-btn'>Entry</button>

          </div>
        </div>
        <div className='image'>
          <img src ={car} />
        </div>


      </div>
    </div>
  )
}

export default Landing;