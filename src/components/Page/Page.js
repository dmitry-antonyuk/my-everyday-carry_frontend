import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                <Header/>
                <div className="container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )

    }
}

export default Page;
