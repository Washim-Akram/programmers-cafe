import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import MyBlog from './components/MyBlog/MyBlog';


function App() {
  const [markAsRead, setMarkAsRead] = useState([]);
  const [bookMark, setBookMark] = useState([]);

  const handleMarkAsRead = (reading_time) => {
    const totalReadingTime = [...markAsRead, reading_time];
    setMarkAsRead(totalReadingTime);
}

const handleBookMark = (bookMarked) => {
  const {id, blog_title} = bookMarked;



  const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
  let bookmark = [];
  const blogInfo = {id, blog_title};
  if (previousBookmark) {
    const isThisBlogMarked = previousBookmark.find((blog) => blog.id == id);
    if (isThisBlogMarked) {
      toast("You Have Already Bookmarked This Blog !");
    } else {
      bookmark.push(...previousBookmark, blogInfo);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
  } else {
    bookmark.push(blogInfo);
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }
  const totalBookMark = [...bookMark, bookMarked];
  setBookMark(totalBookMark);
}

const checkBookmark = (id) => {
  const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));

  const isBookmarked = previousBookmark?.find((blog) => blog.id == id);
  if (isBookmarked) {
    return true;
  } else {
    return false;
  }
};

  return (
    <div className="App">
      <Header></Header>
      <div className='container d-flex flex-column flex-md-row gap-4 my-5'>
        <Blogs
         handleMarkAsRead={handleMarkAsRead}
         handleBookMark={handleBookMark}
         checkBookmark={checkBookmark}
         ></Blogs>
        <Cart
         markAsRead={markAsRead}
         bookMark={bookMark}
         ></Cart>
      </div>
      <MyBlog></MyBlog>
      <ToastContainer />
    </div>
  )
}

export default App
