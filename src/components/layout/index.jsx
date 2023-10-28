const Layout = ({ children }) => {
  return (
    <div className="lg:bg-color-fondo  lg:mr-20 lg:flex lg:items-center  lg:justify-center w-screen items-center">
      {children}
    </div>
  );
};

export default Layout;
