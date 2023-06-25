import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Events from './events';
import WebTeam from './webteam';

const Routing = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Events/>}/>
      <Route path="/team" element={<WebTeam/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routing;