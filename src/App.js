import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound';
import WebDevProject from './Component/WebDevProject';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<WebDevProject /> } />
          <Route path="all" element={<AllUsers /> } />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
