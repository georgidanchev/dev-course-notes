import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname=== '/' && <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : title} onClick={onAdd}></Button>}
    </header>
  );
};

// Set default prop values
Header.defaultProps = {
  title: 'Add',
};

// Check our prop types and use ".isRequired"
// to make it a required prop
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'grey'
// }

export default Header;
