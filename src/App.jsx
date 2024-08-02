import React, {Fragment} from 'react';
import Nav from "./components/nav/nav.jsx";
import Banner from "./components/banar/bannar.jsx";
import Category from "./components/catagory/category.jsx";
import Contact from "./components/contact/conatct.jsx";
import Bages from "./components/bages/bage.jsx";

const App = () => {
    return (
        <Fragment>
            <Nav/>
            <Banner/>
            <Category/>
            <Contact/>
            <Bages/>
        </Fragment>
    );
};

export default App;
