import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = state => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

const mapDispatchToProps = () => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
