import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../pages/layout';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Features from '../pages/features';
import Reviews from '../pages/reviews';
import Faqs from '../pages/faq';
import Enquiry from '../pages/enquiry';

function Routing(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                    <Route path='/Login' element={<Login/>} />
                    <Route path='/Signup' element={<Signup/>} />
                    <Route path='/Features' element={<Features/>} />
                    <Route path='/Reviews' element={<Reviews/>} />
                    <Route path='/Faqs' element={<Faqs/>} />
                    <Route path='/Enquiry' element={<Enquiry/>} />
                </Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default Routing;