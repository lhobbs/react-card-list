import React from 'react';

const Header = () => (
  <header>
    <img src="src/logo.png" />

    <style jsx>{`
        img {
          display: block;
          width: 300px;
          margin: 16px auto;
        }
      `}
    </style>
  </header>
)

export default Header;