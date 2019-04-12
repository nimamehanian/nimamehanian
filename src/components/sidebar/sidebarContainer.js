import { connect } from 'react-redux';
import Sidebar from 'components/sidebar/sidebar';
import {
  SIDEBAR_OPEN,
  SIDEBAR_SHUT,
  SIDEBAR_PEEK,
  SIDEBAR_TUCK
} from './sidebarActions';

const mapStateToProps = state => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
  isSidebarPeeking: state.sidebar.isSidebarPeeking,
});

const mapDispatchToProps = dispatch => ({
  open() { dispatch({ type: SIDEBAR_OPEN }); },
  shut() { dispatch({ type: SIDEBAR_SHUT }); },
  peek() { dispatch({ type: SIDEBAR_PEEK }); },
  tuck() { dispatch({ type: SIDEBAR_TUCK }); },
});

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
