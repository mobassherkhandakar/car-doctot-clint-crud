import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SocialLogin = () => {
  const {googleSigin} = useContext(AuthContext)
  const googleHandle = () =>{
    googleSigin()
    .then(result=>{
      const logdinUser = result.user;
    })
    .catch(error=> {
      console.log(error.message);
    })
  }
  return (
    <div>
      <div className="divider">OR</div>
    <div className='text-center'>
      <button onClick={googleHandle} className='btn btn-circle  btn-outline '>
        G
      </button>
    </div>
    </div>
  );
};

export default SocialLogin;