import { Link } from 'react-router-dom'
import '../CSS/Signup.css'

const SignUp = () => {
  return (
    <div>
      <div className='signup d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form-container  p-xl-5 p-lg-5 p-md-4 p-sm-3 p-xs-3 rounded bg-white'>
          <form className='formgeral p-md-4'>
            <h3 className='text-center'>Sign Up</h3>
            <div className='mb-2'>
              <label htmlFor='fname'>First Name</label>
              <input
                type='fname'
                placeholder='Enter First Name'
                className='form-control sm-4'
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='lname'>Last Name</label>
              <input
                type='lname'
                placeholder='Enter Last Name'
                className='form-control'
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Enter Password'
                className='form-control'
              />
            </div>
            <div className='d-grid'>
              <button className='btn btn-primary'>Sign Up</button>
            </div>
            <p className='text-end mt-2'>
              Already Registered{' '}
              <Link to='/' className='ms-2'>
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp