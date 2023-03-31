import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  const [markAsRead, setMarkAsRead] = useState([]);

  const handleMarkAsRead = (reading_time) => {
    const totalReadingTime = [...markAsRead, reading_time];
    setMarkAsRead(totalReadingTime);
}

  return (
    <div className="App">
      <Header></Header>
      <div className='container d-flex flex-column flex-md-row gap-4 my-5'>
        <Blogs handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Cart markAsRead={markAsRead}></Cart>
      </div>
    </div>
  )
}

export default App
