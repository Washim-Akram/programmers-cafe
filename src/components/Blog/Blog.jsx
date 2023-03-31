import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Blog.css';

const Blog = ({blog, handleMarkAsRead}) => {
    const { blog_title, blog_img_url, author_img_url, author_name,published_in, reading_time, tag } = blog;
    return (
        <article>
            <Card>
                <Card.Img className='blog-img img-fluid' variant="top" src={blog_img_url} />
                <Card.Body>
                    <div className='d-flex flex-column-reverse flex-md-row align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <img className='author-img' src={author_img_url} alt="Name of the Blog Author" />
                            <div>
                                <p className='author-name m-0'>{author_name}</p>
                                <p className='text-blog-info m-0'>{published_in}</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                <span className='text-blog-info'>{reading_time} min read <FontAwesomeIcon icon={faBookmark} /></span>
                            </p>
                        </div>
                    </div>
                    <Card.Title className='blog-title'>{blog_title}</Card.Title>
                    <Card.Text ><a className='text-blog-info' href="#">{tag}</a></Card.Text>

                    <Button
                     className='text-mark-as-read' variant="outline-light"
                     onClick={ () => handleMarkAsRead(reading_time)}
                     >
                     Mark as read
                    </Button>{' '}

                </Card.Body>

            </Card>
        </article>

    );
};

export default Blog;