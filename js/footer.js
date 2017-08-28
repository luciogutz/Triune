import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'

const footerImages = {
  footerLogo: "https://github.com/luciogutz/Triune/blob/master/public/assets/Triune-logo.png?raw=true"
}

class Footer extends React.Component {
  render() {
    return(
      <section className="footer_section">
        <img src={footerImages.footerLogo}/>
        <section className="footer_content-container">
          <div className="footer_menu-items">
             <Link to="/"> HOME </Link>
             <Link to="/"> BLOG </Link>
             <Link to="/"> PICS </Link>
             <Link to="/"> BIO </Link>
             <Link to="/"> ART </Link>
          </div>
        </section>
        <div className="footer_sociallMedia-icons">

        </div>
        <div className="footer_copyright">
          <i className="fa fa-copyright" aria-hidden="true"> Copyright 2017 -  subsidiary of Triune Logistics </i>

          <div className="footer_icons-links"><p>Icons made by</p>
            <a href="http://www.freepik.com" title="Freepik"> Freepik </a>
               <p>from</p>
            <a
                href="https://www.flaticon.com/" title="Flaticon"> "www.flaticon.com" </a>
              <p>is licensed by</p>
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer
