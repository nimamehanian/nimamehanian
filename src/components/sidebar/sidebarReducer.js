import {
  SIDEBAR_OPEN,
  SIDEBAR_SHUT,
  SIDEBAR_PEEK,
  SIDEBAR_TUCK,
  SIDEBAR_LINK_SELECT
} from './sidebarActions';

const initialState = {
  isSidebarOpen: false,
  isSidebarPeeking: false,
  activeIndex: 0,
  links: [
    { name: 'home', isActive: true },
    { name: 'story', isActive: false },
    { name: 'classes', isActive: false },
    { name: 'work', isActive: false },
    { name: 'blog', isActive: false },
    { name: 'resources', isActive: false },
    { name: 'connect', isActive: false },
  ],
};

const setActiveLink = (links = [], index) => {
  const reset = links.map(({ name }) => ({ name, isActive: false }));
  return [
    ...reset.slice(0, index),
    { name: reset[index].name, isActive: true },
    ...reset.slice(index + 1),
  ];
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
    case SIDEBAR_LINK_SELECT:
      return {
        ...state,
        activeIndex: action.index,
        links: setActiveLink(state.links, action.index),
      };
    default:
      return state;
  }
};

export default sidebar;
