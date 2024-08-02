import React from 'react';

const Bage = () => {
    return (
        <>
            <div className="bage container-fluid mt-5 bg-dark opacity-75  ">
                <div className='container align-items-center'>
                    <div className="row  d-flex justify-content-center align-items-center">
                        <div className="col-12 d-flex justify-content-center align-items-center py-5">
                            <div className='col-6'>
                                <h1 className='text-white'>Event -2025</h1>
                            </div>
                            <div className='col-6'>
                                <button className='btn btn-success w-75'>Learn more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-fluid mt-5 bg-success  '>
                <div className='row align-items-center'>
                    <div className='col-12 d-flex justify-content-center align-items-center py-3'>
                        <div className='col-6 text-center'>
                            <h2 className='text-white'>lorem ins</h2>
                        </div>
                        <div className='col-6 text-center'>
                            <button className='btn btn-info w-75'>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bage;
