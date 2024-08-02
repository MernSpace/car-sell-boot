import React from 'react';
import img1 from '../../assets/images/image1.png';
import img2 from '../../assets/images/image2.png';
import img3 from '../../assets/images/image3.png';

const Category = () => {
    return (
        <div className='container'>
            <div className='row text-center mt-5'>
                <h2 className='mb-5'>Top Category</h2>
                <div className='col-12 d-flex gap-5 justify-content-center align-items-center'>
                    <div className='col-3'>
                        <div className='card text-center shadow'>
                            <div className='card-img'>
                                <img className='card-img-top' src={img1}/>
                            </div>
                            <div className='card-body'>
                                <h2 className='mt-5'>BMW</h2>
                                <button className='btn btn-primary px-5  mb-2'>View Category</button>

                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card text-center shadow'>
                            <div className='card-img'>
                                <img className='card-img-top' src={img2}/>
                            </div>
                            <div className='card-body'>
                                <h2 className='mt-5'>BMW</h2>
                                <button className='btn btn-primary px-5  mb-2'>View Category</button>

                            </div>

                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='card text-center shadow'>
                            <div className='card-img'>
                                <img className='card-img-top' src={img3}/>
                            </div>
                        <div className='card-body'>
                            <h2 className='mt-5'>BMW</h2>
                            <button className='btn btn-primary px-5  mb-2'>View Category</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
