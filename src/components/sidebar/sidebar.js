import React from 'react';
import Hamburger from 'components/hamburger/hamburger';

function Sidebar({ isSidebarOpen }) {
  return (
    <div>
      <Hamburger isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default Sidebar;
