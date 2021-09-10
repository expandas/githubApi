import React from 'react';
import {AUTHOR_PAGE} from "../helpers/httpConstants";

const Footer = () => {
  return (
    <div className='d-flex align-items-center justify-content-center mt-3 mb-3'>
      <a href={AUTHOR_PAGE} className="link-dark" style={{textDecoration: "none"}}>© expandas SP, 2021 </a>
    </div>
  );
};

export default Footer;