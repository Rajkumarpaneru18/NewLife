import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-purple-700 via-orange-300 to-purple-700 min-h-screen">
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
