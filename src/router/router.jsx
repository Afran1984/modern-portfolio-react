import RootsLayout from '@/layouts/RootsLayout';
import Home from '@/Pages/Home/Home/Home';
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

        }

    ]
  },

]);