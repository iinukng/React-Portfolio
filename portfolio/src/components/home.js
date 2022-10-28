import React from 'react'

export const Home = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
    
    <div
      className='text-center bg-image vw-100 vh-100'
      style={{ backgroundImage: "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg')"}}
    >
      <div className='mask position-absolute top-50 start-50 translate-middle' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>About Me</h1>
            <h5 className='mb-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc pulvinar. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Tempor orci dapibus ultrices in iaculis nunc. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Cursus in hac habitasse platea dictumst quisque. Id nibh tortor id aliquet. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisis mauris sit amet massa vitae tortor. Quis enim lobortis scelerisque fermentum. Amet tellus cras adipiscing enim eu turpis. Turpis massa tincidunt dui ut ornare lectus sit amet est. Sit amet luctus venenatis lectus magna.
            </h5>
            
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}
