import React from 'react';
import img1 from '../../assets/images/image1.png';

const contact = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-12 d-flex gap-2 justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <form className='w-75'>
                            <label className='form-label'>Email Address</label>
                            <input type='email' className='form-control mb-2'/>

                            <label className='form-label'>Phone</label>
                            <input type='text' className='form-control '/>
                            <button className='btn btn-success px-5 mt-2' type='submit'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <img className='w-100 rounded' src={img1}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default contact;
