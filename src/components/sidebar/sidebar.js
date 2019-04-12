import React from 'react';
import Hamburger from 'components/sidebar/sidebar';

function Sidebar({ isSidebarOpen }) {
  return (
    <div>
      <Hamburger isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default Sidebar;
