import { Swiper, SwiperSlide } from 'swiper/react';
// ts-ignore
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
const CarCard = ()=>{
  return (
    <div className='container car-card py-4'>
      <h3>Cars</h3>
      <p>All cars are the property of a driving school and insured 
as educational machines</p>
      <Swiper
        modules={[Navigation, Pagination,]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          
        }}
      >
        <SwiperSlide>
          <div className='box bg-dark' style={{height:'300px'}}>
            <div className='h-75 bg-danger'>
            </div>
            <button className='entry-btn my-4 mx-4'>Select</button>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='box bg-dark' style={{height:'300px'}}>
            <div className='h-75 bg-danger'>
            </div>
            <button className='entry-btn my-4 mx-4'>Select</button>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='box bg-dark' style={{height:'300px'}}>
            <div className='h-75 bg-danger'>
            </div>
            <button className='entry-btn my-4 mx-4'>Select</button>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='box bg-dark' style={{height:'300px'}}>
            <div className='h-75 bg-danger'>
            </div>
            <button className='entry-btn my-4 mx-4'>Select</button>
            
          </div>
        </SwiperSlide>
         
      </Swiper>
    </div>
  )
  
  
}
  
export default CarCard;
