function Offices ({title}) {
  return(
    <div className="container">
		  <div className="row">
			  <p className="text-row">{title}</p>
		  </div>

		  <div className="row">
			  <div className="card-deck">
          <div className="card">
            <img src="https://media.istockphoto.com/photos/empty-coworking-office-picture-id1305552760?b=1&k=20&m=1305552760&s=170667a&w=0&h=3Hhs4ITRmy7ObFHucsU4qB3Ic1itDL2wa20pzItbkvw=" className="card-img-top" alt="Virtual Offices"/>
            <div className="card-body">
              <h5 className="card-title">VIRTUAL OFFICES</h5>
              <p className="card-text thumbnail">Our virtual offices allow your business to get our location address, phone services and also you become a member of our community with benefits such as access to our meeting rooms.</p>
            </div>
          </div>
                
          <div className="card">
            <img src="https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpcnR1YWwlMjBvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="card-img-top Img1" alt="Customized Offices"/>
            <div className="card-body">
              <h5 className="card-title">CUSTOMIZED OFFICES</h5>
              <p className="card-text thumbnail"> Our customized offices offer a great location for your business and you can customize your office to suit your preferences. Also, you become a member of our community with benefits such as access to our meeting rooms.</p>
            </div>
          </div>
   
          <div className="card">
            <img src="https://media.istockphoto.com/photos/view-of-empty-office-picture-id519053211?b=1&k=20&m=519053211&s=170667a&w=0&h=sT7Ir2HlxrWkdnSBzs3RBy_NiAlv9T0geDKO7Ee84j8=" className="card-img-top Img2" alt="Serviced Offices"/>
            <div className="card-body">
              <h5 className="card-title">SERVICED OFFICES</h5>
              <p className="card-text thumbnail">Our serviced offices offer a great location for your business and we provide services such as internet, utilities and offers from our partners. Also you become a member of our community with benefits such as access tour meeting rooms.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top Img3" alt="Meeting Rooms"/>
            <div className="card-body">
              <h5 className="card-title">MEETING ROOMS</h5>
              <p className="card-text thumbnail">Our meeting rooms offer a great location for your meeting with your clients or business partners. We provide presentation equipment and coffee. Also you become a member of our community with benefits such as access to our meeting rooms.</p>
            </div>
          </div>

        </div>
		  </div>
	  </div>

  );
}

export default Offices;