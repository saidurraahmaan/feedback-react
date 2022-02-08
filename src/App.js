import React from "react";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";

import FeedbackLIst from "./components/FeedbackList";
import FeedbackStates from "./components/FeedbakcStates";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext"


export const App = () => {

    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStates />
                                <FeedbackLIst />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>

                    <AboutIconLink/>

                </div>
            </Router>
        </FeedbackProvider>
    );
}