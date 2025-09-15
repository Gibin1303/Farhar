import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//     const links = ["/about","/terms","/privacy","/accessibility"]
//   return (
//     <footer className='mt-12 bg-gray-50'>
//         <div>
//          <p className='text-center'>&copy;2025 Crowdfunding.All rights reserved</p>
//          <div className='flex'>
//              {
//                 links.map(item=>(
//                     <Link to={item} >{""}</Link>
//                 ))
//              }
//          </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer

import { Link } from "react-router-dom";


const Footer = () => {

  const links = [
    { name: "About", path: "/about" },
    { name: "Terms", path: "/terms" },
    { name: "Privacy", path: "/privacy" },
    { name: "Accessibility", path: "/accessibility" },
  ];

  return (
    <footer className="mt-12 bg-gray-50 py-6">
      <div className="flex flex-col items-center gap-4">
        {/* Copyright */}
        <p className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Crowdfunding. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="text-gray-600 hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
