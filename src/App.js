import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import './App.css';


function App() {
  return (  
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Read />} />
          <Route path="Create" element={<Create />} />
          <Route path="Update" element={<Update />} />
          <Route path="Delete" element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
