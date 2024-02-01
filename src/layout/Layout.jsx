import PropsTypes from "prop-types";

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

Layout.propTypes  ={
    children: PropsTypes.element
}

export default Layout;
