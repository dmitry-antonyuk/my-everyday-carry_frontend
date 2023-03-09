import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero';
import Form from '../Form/Form';
import Blog from '../Blog/Blog';
import DelivererCard from '../DelivererCard/DelivererCard';



const Layout = ({children}) => (
    <div>

        <Header/>
        <Hero/>
        {children}
        <Form/>
        <Blog/>
        <DelivererCard/>
        <Footer/>
    </div>
);

export default Layout;