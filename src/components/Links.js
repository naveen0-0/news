import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
   return (
      <div className="links">
         <div className="linkDiv"><Link to="/" className="link">HeadLines</Link></div>
         <div className="linkDiv"><Link to="/business" className="link">Business</Link></div>
         <div className="linkDiv"><Link to="/entertainment" className="link">Entertainment</Link></div>
         <div className="linkDiv"><Link to="/politics" className="link">Politics</Link></div>
         <div className="linkDiv"><Link to="/tech" className="link">Technology</Link></div>
         <div className="linkDiv"><Link to="/sports" className="link">Sports</Link></div>
         <div className="linkDiv"><Link to="/lifestyle" className="link">LifeStyle</Link></div>
         <div className="linkDiv"><Link to="/india" className="link">India</Link></div>
         <div className="linkDiv"><Link to="/world" className="link">World</Link></div>
      </div>
   )
}