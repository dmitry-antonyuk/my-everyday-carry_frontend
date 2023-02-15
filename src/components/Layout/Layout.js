import Header2 from './../../../alpina-ui/src/components/Header/Header'

// import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar';



const Layout = ({children}) => (
    <div>
        <Navbar/>
        {/*<Header/>*/}
        <Header2/>
        {children}
        <Footer/>
    </div>
);

export default Layout;