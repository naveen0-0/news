import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Links(){
   return(
      <div className="links">
         <Link to="/" className="link">HeadLines</Link>
         <Link to="/business" className="link">Business</Link>
         <Link to="/entertainment" className="link">Entertainment</Link>
         <Link to="/politics" className="link">Politics</Link>
         <Link to="/tech" className="link">Technology</Link>
         <Link to="/sports" className="link">Sports</Link>
         <Link to="/lifestyle" className="link">LifeStyle</Link>
         <Link to="/india" className="link">India</Link>
         <Link to="/world" className="link">World</Link>
      </div>
   )
}