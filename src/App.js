import logo from './logo.svg';
import './App.css';
import AddPhoto from './component/AddPhoto';
import SearchPhoto from './component/SearchPhoto';
import DeletePhoto from './component/DeletePhoto';
import ViewPhoto from './component/ViewPhoto';
import NavigationBar from './component/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <Routes>


      <Route path="/" element= { <AddPhoto/> } />
      <Route path="/SearchPhoto" element= { <SearchPhoto/> } />
      <Route path="/ViewPhoto" element= { <ViewPhoto/> } />
      <Route path="/DeletePhoto" element= { <DeletePhoto/> } />






    </Routes>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </BrowserRouter>









  );
}

export default App;
