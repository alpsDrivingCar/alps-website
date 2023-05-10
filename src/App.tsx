import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch } from './store/index';
import Header from './components/layout/header';
import { fetchCount } from './store/counter/counterApi';
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const counter:number = useSelector((state:RootState) => state.count.count);

  useEffect(()=>{
    dispatch(fetchCount())

  },[dispatch])
  

  return (
    <>
      <div>
        <Header />
        {counter}

      </div>
    </>
  )
}

export default App
