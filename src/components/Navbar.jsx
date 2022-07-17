import React, {Component} from "react";

class Navbar extends Component {
  render (){
    return (
      <div className="container">
		    <div className="row nav-row">
			    <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand HO-logo" href="logo">
              <img src="https://horizonsoffices.com/images/hr/logo.png" width="150" height="50" className="d-inline-block align-top" alt="Horizons Office Logo"/>
            </a>
          </nav>


          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand Flag1" href="flag1">
              <img src="https://media.istockphoto.com/photos/ghana-flag-picture-id471793389?b=1&k=20&m=471793389&s=170667a&w=0&h=FwOrTLiNJX3GAnb80fr2M3tMchQ8KRhxHMkQxpDoCWY=" width="20" height="15" alt="Ghana Flag"/>
            </a>
          </nav>


          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand Flag2" href="flag2">
              <img src="https://media.istockphoto.com/photos/nigeria-flag-picture-id471793397?b=1&k=20&m=471793397&s=170667a&w=0&h=6jAghePLCOCTmIYvaNJZsGKr0wgzuP0SbDzyeHg-X6s=" width="20" height="15" alt="Nigeria Flag"/>
            </a>
          </nav>


          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand Flag" href="flag3">
              <img src="https://media.istockphoto.com/photos/highly-detailed-flag-of-kenya-kenya-flag-high-detail-national-flag-picture-id1309828548?b=1&k=20&m=1309828548&s=170667a&w=0&h=2V7QuuhilEUUoanYnWpp5dF3q_x0nJuZ72p1x-Pqs64=" width="20" height="15" alt="Kenya Flag"/>
            </a>
          </nav>


          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link About" href="#about">ABOUT US</a>
            </li>
          </ul>

		    </div>
	    </div>

    );
  }
}

export default Navbar;