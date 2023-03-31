import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container d-flex flex-column flex-md-row gap-4 my-5'>
        <Blogs></Blogs>
        <Cart></Cart>
      </div>
    </div>
  )
}

export default App
