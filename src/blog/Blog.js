import React from 'react';
import "./blog.css"
import Navbar from '../components/Navbar';

class Blog extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='blog'>
                    <h1 id='text'>404 Not Found</h1>
                </div>
            </div>
        );
    }
}



export default Blog;
