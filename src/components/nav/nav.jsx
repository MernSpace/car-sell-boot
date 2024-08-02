import React from 'react';

const Nav = () => {
    return (
        <div className='container-fluid bg-info'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-around align-items-center py-2'>
                    <div className='col-6 px-5'>
                        <h2 className='text-white'>LOGO</h2>
                    </div>
                    <div className='col-6 '>
                        <div className='navbar-nav'>
                            <div className='nav-item d-flex gap-5'>
                                <a href='#home' className='nav-link text-white'>Home</a>
                                <a href='#home' className='nav-link text-white'>About</a>
                                <a href='#home' className='nav-link text-white'>Product</a>
                                <a href='#home' className='nav-link text-white'>Contact</a>
                                <a href='#home' className='btn btn-success px-5'>Login</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Nav;
