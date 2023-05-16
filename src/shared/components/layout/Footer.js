// import React, { Component } from 'react';

// class Footer extends Component {
//   render() {
//     return (
//    <footer>&copy; Codejobs {(new Date()).getFullYear()}</footer>
//     );
//   }
// }


import React from 'react';

// Since we don't have props, we can directly return our JSX.
const Footer = () => (
  <footer>&copy; Codejobs {(new Date()).getFullYear()}</footer>
);

export default Footer;