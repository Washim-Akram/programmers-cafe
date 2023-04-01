import React from 'react';
import './MyBlog.css';

const MyBlog = () => {
    return (
        <section className='container mb-5'>
            <hr />
            <h1 className='text-center my-5 border border-1 border-info py-4 display-6'>Conceptual Discussions!</h1>
            <div className='row row-cols-1 row-cols-md-2 g-5'>
                <div className="col">
                    <article className='blog'>
                        <h2>What is the difference between props and state in React?</h2>
                        <hr />
                        <h3>What are props?</h3>
                        <p>Props is short form of properties. They are used to pass data between React components. React data flow between components is uni-directional (from parent to child only).</p>
                        <p>Props are immutable and read only. we can not change props values later.</p>
                        <h3>What is state?</h3>
                        <p>React has a special built-in hook called useState(), which allows components to create data. and manage their own data.</p>
                        <p>state or useState() is mutable. It can be changed or modified from its own component. But from outside we do not change or modify it.</p>
                    </article>
                </div>

                <div className="col">
                    <article className='blog'>
                        <h2>How does useState work in React?</h2>
                        <hr />
                        <p>useState() is a built-in react hook that allows us to add state functionality to react functional component. State means it could be change(not always). It returns an array with two elements:
                        <br />
                        1. current value.
                        <br />
                        2. A function that update the state value.
                        <br />
                        useState() hook is mutable. From inside component we can change or modify it.
                        </p>
                    </article>
                </div>

                <div className="col">
                    <article className='blog'>
                            <h2>Purpose of useEffect other than fetching data</h2>
                            <hr />
                            <p>The useEffect() hook is built-in hook in react. It allows us to perform side effects in our components. One example of side effects is : fetching data.</p>
                            <p>The purposes of useEffect other than fetching data is:
                                <br />
                                1. Handle side effects.
                                <br />
                                2. Updating the document title.
                                <br />
                                3. Handling window or document events.
                            </p>
                    </article>
                </div>

                <div className="col">
                    <article className='blog'>
                        <h2>How Does React work?</h2>
                        <hr />
                       <p>React is a JavaScript library to build user interfaces. Internally, react maintain a virtual DOM. In app, when there make or happen a change, react compare the change with its virtual DOM. It understand the change by its built-in "diff" algorithm. After that, react update or modify the actual DOM.</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MyBlog;