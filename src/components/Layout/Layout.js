import Header from './../../../alpina-ui/src/components/Header/Header'

// import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar';



const Layout = ({children}) => (
    <div>
        <Navbar/>
        {/*<Header/>*/}
        {children}
        <Footer/>
    </div>
);

export default Layout;