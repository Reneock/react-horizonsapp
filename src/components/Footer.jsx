function Footer ({intro}) {
  return (
    <div className="container footer">
		  <div className="row">
			  <div className="col-md-4">
				  <div className="card-body">
            <h5 className="card-title">{intro} KENYA</h5>
            <h6 className="card-text">Nairobi,Kenya</h6>
            <p className="card-text">Belgravia Centre, 14 Riverside drive, <br/> 4th floor, Off Riverside Drive, <br/> 6th floor, Off Riverside Drive</p>
          </div>
			  </div>

			  <div className="col-md-4">
				  <div className="card-body">
            <h5 className="card-title">{intro} GHANA</h5>
            <h6 className="card-text">Accra,Ghana</h6>
            <p className="card-text">One Airport Square, Airport City <br/> 8th Floor</p>
          </div>
			  </div>

			  <div className="col-md-4">
				  <div className="card-body">
            <h5 className="card-title">{intro} NIGERIA</h5>
            <h6 className="card-text">Lagos,Nigeria</h6>
            <p className="card-text">Sterling Bank Building</p>
          </div>
			  </div>
		  </div>
	  </div>

  );
}

export default Footer;