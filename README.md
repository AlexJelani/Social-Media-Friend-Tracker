 
 const x = false
 {/* Terniary operator */}
<h2>hello { x ? 'yes' : 'no'}</h2>

Default props
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
export default Header;


import PropTypes from 'prop-types'

Header.PropTypes = {
  title: PropTypes.string
}

//Css in JS
// const headingStyle  = {
//   color: 'red',
//   backgroundColor: 'black'
// }