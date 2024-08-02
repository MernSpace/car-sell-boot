import React from 'react';

const Bannar = () => {
    return (
        <div className=' container-fluid bannar  d-flex justify-content-center align-items-center'>
            <div className='row '>
                <div className='col-12  '>
                    <h2 className='text-white '>BMW sqe-039495</h2>
                    <p className='text-white '>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences.<br/>With a strong foundation in design principles and a keen eye for detail,<br/> I specialize in translating complex ideas into user-friendly interfaces that captivate and engage. 2024
                    </p>
                    <div className=''>
                        <button className='btn btn-primary px-5'>Buy Now</button>
                        <i className='bi bi-arrow-right'></i>
                    </div>
                </div>
                <div className='col-12'></div>
            </div>

        </div>
    );
};

export default Bannar;
