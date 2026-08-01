import RootsLayout from '@/layouts/RootsLayout';
import Home from '@/Pages/Home/Home/Home';
import About from '@/Pages/Home/Shares/About/About';
import Contact from '@/Pages/Home/Shares/Contact/Contact';
import Portfolio from '@/Pages/Home/Shares/Portfolio/Portfolio';
import Resharge from '@/Pages/Home/Shares/Resharge/Resharge';
import Service from '@/Pages/Home/Shares/Service/Service';
import TestimonialsForm from '@/Pages/Home/Shares/TestimonialsForm/TestimonialsForm';
import { createBrowserRouter } from 'react-router'



export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootsLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/home",
          Component: Home
        },
        {
          path: "/service",
          Component: Service
        },
        {
          path: "/portfolio",
          Component: Portfolio
        },
        {
          path: "/resharge",
          Component: Resharge
        },
        {
          path: "/about",
          Component: About
        },
        {
          path: "/contact",
          Component: Contact
        },
        {
          path: "/testimonialsform",
          Component: TestimonialsForm
        },



    ]
  },

]);