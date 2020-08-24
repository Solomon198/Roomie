import React from 'react'
import {Link} from 'react-router-dom'
const footer = ()=>(
    <footer style={{background:"#f4f4f4"}} className="footerStyle text-dark t text-center">
              <h4 style={{color:"darkgray",paddingTop:20}}>Quick links</h4>
              <div className="container-fluid mt-3">
                   <div className="d-flex">
                       <div className="col-sm-6 footerItem">
                           <Link className="nav-link" to="#">About</Link>
                           <Link className="nav-link" to="#">Terms of Use</Link>
                           <Link className="nav-link" to="#">FAQ</Link>
                           <Link className="nav-link" to="#">Sitemap</Link>
                       </div>
                       <div className="col-sm-6 footerItem">
                          
                           <Link className="nav-link" to="#">Privacy Policy</Link>
                           <Link className="nav-link" to="#">Terms of Use</Link>
                           <Link className="nav-link" to="#">Cancellation</Link>
                           <Link className="nav-link" to="#">Legal</Link>  

                       </div>
                   </div>

                   <h4 style={{color:"darkgray"}}>Follow Us.</h4>

                  
                   <div className="my-4 justify-content-center d-flex text-center">
                   
                      <div className="flex-fill"/>
                      <div className="flex-fill"><i style={{fontSize:30,marginRight:2}} class="fa fa-facebook" aria-hidden="true"></i></div>
                      <div className="flex-fill"><i style={{fontSize:30,marginRight:2}} class="fa fa-twitter" aria-hidden="true"></i></div>
                      <div className="flex-fill"><i style={{fontSize:30,marginRight:2}} class="fa fa-instagram" aria-hidden="true"></i></div>
                      <div className="flex-fill" />
                   </div>

                   <div className="my-2">

                   <i style={{fontSize:30,marginRight:2}} class="fa fa-cc-visa" aria-hidden="true"></i>
                   <i style={{fontSize:30,marginRight:2}} class="fab fa-cc-mastercard" aria-hidden="true"></i>
                   <i style={{fontSize:30,marginRight:2}} class="fab fa-cc-amex" aria-hidden="true"></i>

                   </div>


                   <p style={{color:"#444"}} className="py-4 text-center ">Copyright &copy; Geniebhai 2019</p>
              </div>

    </footer>
)

export default footer;

