import React from 'react';

function Home(props) {
    return(
      <div className="container">
        {/* <h2 className="whiteColor">Home</h2> */}
        
        <div className="row">
          <div className="col-sm-6">
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/-WR-FyUQc6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="col-sm-6">
            <p><i class="fa fa-quote-left redColor"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum in leo vitae luctus. Ut sapien est, hendrerit quis urna vel, lobortis mollis metus. Fusce rutrum, elit a interdum iaculis, ipsum ex hendrerit tellus, a iaculis sem odio in lorem. In ac mauris in purus mollis venenatis. Sed euismod lectus leo, at porta nunc iaculis quis.</p>
          </div>
        </div>

        <div className="row">
        <div className="col-sm-4">
          
        </div>
        <div className="col-sm-4">

        </div>
        <div className="col-sm-4">

        </div>
        </div>
      </div>
      
     
    );
}

export default Home;   