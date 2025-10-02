import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';
const navData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navber = () => {
    const [open, setOpen] = useState(false);
    const links = navData.map(route => <Links key={route.id} route = {route}></Links>)

    return (
        <nav className='flex justify-between mx-10 mt-7'>
            <span className='flex' onClick={ () => setOpen(!open)}>
                { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu> }
                    {
                        <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8' : '-top-40'} bg-blue-300`}>
                            {links}
                        </ul>
                    }
                <h1 className='ml-5'>My Logo</h1>
            </span>
                <ul className='md:flex hidden'>
                    {
                      links  
                    }
                </ul>
            <button>Sing in</button>
        </nav>
    );
};

export default Navber;