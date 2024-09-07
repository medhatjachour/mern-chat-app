// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from "prop-types";
const Model = ({isModelOpened, setModelOpened, children}) => {
    if(!isModelOpened) return null;
  return (
    <div className='fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z50'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
                <button className=' absolute top-4 right-4 text-gray-200 text-4xl' onClick={()=> setModelOpened(false)}>
                    &times;
                </button>
                {children}
        </div>
    </div>
  )
}
Model.propTypes = {
    children: PropTypes.any,
    isModelOpened: PropTypes.bool,
    setModelOpened: PropTypes.any,
};


export default Model