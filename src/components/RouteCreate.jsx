import RouteDetailPage from '../pages/RouteDetailPage';
import { Route, Routes } from 'react-router-dom';


const RouteCreate = () => {


  return (
    <>
      <Routes>
        <Route path="blog/1" element={<RouteDetailPage />} />
      </Routes>
    </>
  )
}

export default RouteCreate