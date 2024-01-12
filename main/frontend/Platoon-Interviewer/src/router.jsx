import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InterviewPage from './pages/InterviewPage'

import { NotFoundPage } from './pages/NotFoundPage'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "interview/",
                element: <InterviewPage />,
            },   
            {
                path: "about/",
                element: <AboutPage />,
            },        
        ],
        errorElement: <NotFoundPage />
    } 
]);

export default router

