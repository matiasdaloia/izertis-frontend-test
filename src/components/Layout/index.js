import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-[90vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
