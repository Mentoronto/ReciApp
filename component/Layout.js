import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children,user}) => {
  return (
    <div>
    <Navbar user={user}/>
      {children}
    <Footer />
  </div>
  );
};

export default Layout;
