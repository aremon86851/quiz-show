import React from 'react';

const Blog = () => {
    return (
        <div className='mx-44 mt-10'>
            <div>
                <p className='text-2xl'><span className='font-bold'>Q: </span><small>What is the purpose of React Router ?</small></p>
                <p className='text-2xl'><span className='font-bold'>A: </span><small>React Router is a standard library for routing in React.At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different "React" s as it changes, and it also gives you tools to update the location using "Link" s and the history API.</small></p>
            </div>
            <div className='mt-8'>
                <p className='text-2xl'><span className='font-bold'>Q: </span><small>How does context API works ?</small></p>
                <p className='text-2xl'><span className='font-bold'>A: </span><small>The React context api is like Internet because we are using internet as our want . we can use internet from anywhere. So react api is similar like that means internet . React context declare a global variable .This react context variable we can access that from anywhere</small></p>
            </div>
            <div className='mt-8'>
                <p className='text-2xl'><span className='font-bold'>Q: </span><small>What is useRef Hook ?</small></p>
                <p className='text-2xl'><span className='font-bold'>A: </span><small>useRef is an kind of alternative to useState hook , with useRef you can get an reference to  an element and than use the DOM/JS properties to modify it .You can even call useRef as an tool which is used to apply all the DOM properties as you were doing in Javascript before coming to React.
                    If you use useRef than this  apparoch is called un-controlled components.</small></p>
            </div>
        </div>
    );
};

export default Blog;