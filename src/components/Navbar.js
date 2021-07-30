import React, { useState, useEffect} from 'react';
import logo from '../logo.PNG';
import photo from '../photo.PNG';
import amazon from '../amazon.PNG';
import google from '../google.PNG';
import northern from '../northern.PNG';
import skrill from '../skrill.PNG';
import integrate from '../integrate.PNG';
import './Navbar.css';
import { FiMenu, BiPlayCircle} from 'react-icons/all';

const Navbar = () => {
    
const words = ["Solution"];
const [index, setIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);
const [blink, setBlink] = useState(true);
const [reverse, setReverse] = useState(false);

// typeWriter
useEffect(() => {
  if (index === words.length) return;

  if ( subIndex === words[index].length + 1 && 
      index !== words.length - 1 && !reverse ) {
    setReverse(true);
    return;
  }

  if (subIndex === 0 && reverse) {
    setReverse(false);
    setIndex((prev) => prev + 1);
    return;
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) => prev + (reverse ? -1 : 1));
  }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
              150, parseInt(Math.random() * 350)));

  return () => clearTimeout(timeout);
}, [subIndex, index, reverse]);

// blinker
useEffect(() => {
  const timeout2 = setTimeout(() => {
    setBlink((prev) => !prev);
  }, 500);
  return () => clearTimeout(timeout2);
}, [blink]);
    return (
        <div className="container-fluid">
            <div className="" style={{width: '80%',margin: 'auto'}}>
                <nav className= "navbar">
                    <div className= "logo-container">
                        <div>
                            <img src ={ logo } className= "app-logo" alt= "logo" width={40} height={40} style={{display: 'flex', alignItems: 'center'}} /> 
                        </div>
                        <div className= "list">
                            <a href='/' style={{ textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '600'}}>Integration</a>
                            <a href='/' style={{ textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '600'}}>Pricing</a>
                            <a href='/' style={{ textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '600'}}>Blog</a>
                            <a href='/' style={{ textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: '600'}}>About Us</a>
                        </div>         
                    </div> 
                    <button className="nav-btn" style={{ border: '1px solid blue', borderRadius: '20px', background: 'white', color: 'blue'}}> Get early access</button>
                          {/* <FiMenu /> */}
                </nav> 
            </div>

        <div className="main-container">
            <div className= "main"  style={{width: '80%',margin: 'auto'}}>
                <div className= "content1">
                    <h1 style={{ marginBottom: "6px", fontSize: "40px"}}>Don't worry.</h1>
                    <h1 >We are here for every {`${words[index].substring(0, subIndex)}${blink ? "." : " "}`}</h1>
                    <p style={{ marginBottom: "10px", fontSize: '13px', lineHeight: '2'}}>Bushwich meh Blue Bottle pork belly mustache skateboard 3 wolf moon. Actually beard single-origin coffee, twee 90's PBR Echo Park</p>
                    <div className= "buttonalign"  style= {{ display: "flex", justifycontent: "space-between", alignItems: "flex-start" }}>
                            <button className="content-btn1">Get Started</button>
                            <button className="content-btn2"><BiPlayCircle style={{marginBottom: '2px', marginRight: '4px'}} /> Watch Video</button>
                    </div>

                    <br /><br />

                    <div className="brand-logo" style={{display: 'flex',justifyContent:"space-between", alignItems: 'flex-start'}}>
                        <img src ={ integrate } className="integrate-logo" alt="integrate" width={60} height={20} />
                        <img src ={ amazon } className="amazon-logo" alt="amazon" width={40} height={20} />
                        <img src ={ northern } className="northern-logo" alt="northern" width={50} height={20} />
                        <img src ={ google } className="google-logo" alt="google" width={40} height={20} />
                        <img src ={ skrill } className="skrill-logo" alt="skrill" width={40} height={15} />
                    </div>
                </div>
                <div className="content2">
                    <img src ={ photo } className= "app-photo" alt= "photo" width={400} height={400} />  
                </div>
            </div>
        </div>    
    </div> 
        

    
    )
}

export default Navbar;
