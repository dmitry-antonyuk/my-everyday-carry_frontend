import Link from 'next/link';
import Logo from "../Header/Logo";

const navigationFooter = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'Products',
        path: '/good'
    },
    {
        id: 3,
        title: 'Blog',
        path: '/blog'
    },
    // {
    //     id: 4,
    //     title: 'Careers',
    //     path: '/about'
    // },
    // {
    //     id: 5,
    //     title: 'Help',
    //     path: '/about'
    // },
    {
        id: 5,
        title: 'Contact us',
        path: '/contact-us'
    }
]

const Footer = () => (
    <div className='footer'>
        <div className="container footer__container">
            <Logo></Logo>
            <div className="footer__menu">
                {navigationFooter.map(item => {
                    const {id, title, path} = item;
                    return <li key={id}><Link href={path}>{title}</Link></li>
                })}
            </div>
            <div className="footer__copy">
                © 2023 Untitled UI
            </div>
        </div>

    </div>
);

export default Footer;