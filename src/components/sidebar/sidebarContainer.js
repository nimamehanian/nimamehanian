import { connect } from 'react-redux';
import Sidebar from 'components/sidebar/sidebar';
import {
  SIDEBAR_OPEN,
  SIDEBAR_SHUT,
  SIDEBAR_PEEK,
  SIDEBAR_TUCK,
  SIDEBAR_LINK_SELECT
} from './sidebarActions';

const mapStateToProps = (state) => {
  const currentPath = state.router.location.pathname.replace(/\//g, '');
  let activeIndex = 0;
  const links = state.sidebar.links.map(({ name }, index) => {
    const isActive = () => (
      name === currentPath || (name === 'home' && currentPath === '')
    );
    if (isActive()) { activeIndex = index; }
    return { name, isActive: isActive() };
  });

  return {
    isSidebarOpen: state.sidebar.isSidebarOpen,
    isSidebarPeeking: state.sidebar.isSidebarPeeking,
    links,
    activeIndex,
  };
};

const mapDispatchToProps = dispatch => ({
  open() { dispatch({ type: SIDEBAR_OPEN }); },
  shut() { dispatch({ type: SIDEBAR_SHUT }); },
  peek() { dispatch({ type: SIDEBAR_PEEK }); },
  tuck() { dispatch({ type: SIDEBAR_TUCK }); },
  selectLink(index) {
    dispatch({ type: SIDEBAR_LINK_SELECT, index });
  },
});

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
