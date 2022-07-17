function Slider (){
  return(
    <div className="container-fluid">
		  <div className="row">
			  <div className="col-md-12">
			    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="d-block w-100" alt="Office 1" width="100" height="400"/>
              </div>
    
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1631193816258-28b44b21e78b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="d-block w-100" alt="Office 2" width="100" height="400"/>
              </div>
    
              <div className="carousel-item ">
                <img src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="d-block w-100" alt="Office 3" width="100" height="400"/>
              </div>
            </div>
  
            <button className="carousel-control-prev" type="button"  data-target="#carouselExampleControls" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
		  </div>
	  </div>

  );
}

export default Slider;