//import { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { RootState,AppDispatch } from './store/index';
//import { fetchCount } from './store/counter/counterApi';
import Header from '../components/layout/header';
import {Outlet} from 'react-router-dom'
function Root() {
  //const dispatch = useDispatch<AppDispatch>();
  //const counter:number = useSelector((state:RootState) => state.count.count);

  // useEffect(()=>{
  //   dispatch(fetchCount())
  // },[dispatch])

  return (
    <>
      <Header/>
      <Outlet/>
     
    </>
  )
}
export default Root
