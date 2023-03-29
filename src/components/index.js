import pSvg from '../assets/P.svg';
import homePage from '../assets/image.png';
import { Link } from 'react-router-dom';

// import { useState } from 'react';

function Indexpage(){    
    return(
        <main> 
         <div id='index'>
          <div> 
          <nav>
           <ul className="flex-container">
            <li><img src={pSvg} alt="logo" width="40px"/></li>
            <li><Link to='/Register' >Register</Link><a href="/login" id="login" >Login</a></li>
           </ul>
          </nav>
          </div> 
         <div className="flex-container main-container">
            <div className="left">
                <h1 id="heading">Inventory & Stock Management Solution</h1>
                <p className="para">Inventory system to control and manage products in the
                warehouse in real time and integrated to make it easier to develop
                your business</p>
                <a href="" id="free">Free trial 1 Month</a>
                <div className="flex-container brand">
                 <div>
                 <h3>14K</h3>
                  <p className="owners">Brand owners</p>
                </div>
                <div>
                 <h3>23K</h3>
                  <p className="owners">Active users</p>
                </div>
                <div>
                 <h3>500+</h3>
                  <p className="owners">Partners</p>
                </div>
                </div>              
            </div>
            <div>
                <img src={homePage} width="450px" alt="stocks image" />
            </div>
         </div>
         </div>
        </main>    
    );
}

export default Indexpage;