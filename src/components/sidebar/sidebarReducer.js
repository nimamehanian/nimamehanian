import {
  SIDEBAR_OPEN,
  SIDEBAR_SHUT,
  SIDEBAR_PEEK,
  SIDEBAR_TUCK
  // SIDEBAR_LINK_SELECT
} from './sidebarActions';

const initialState = {
  isSidebarOpen: false,
  isSidebarPeeking: false,
  activeIndex: 0,
  links: [
    { name: 'home', isActive: true },
    { name: 'about', isActive: false },
    { name: 'classes', isActive: false },
    { name: 'workshops', isActive: false },
    { name: 'blog', isActive: false },
    { name: 'connect', isActive: false },
  ],
};

const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_SHUT:
      return { ...state, isSidebarOpen: false };
    case SIDEBAR_PEEK:
      return { ...state, isSidebarPeeking: true };
    case SIDEBAR_TUCK:
      return { ...state, isSidebarPeeking: false };
    // case SIDEBAR_LINK_SELECT:
    //   return {
    //     ...state,
    //     activeIndex: action.index,
    //     links: links(state.links, action.index)
    //   };
    default:
      return state;
  }
};

export default sidebar;
