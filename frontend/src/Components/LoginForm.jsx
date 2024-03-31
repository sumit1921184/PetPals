
import { Link } from 'react-router-dom';
import '../CSS/Login.css';
function Login () {
  return (
    <div>
      {/* A tela vai ser d-flex, 100%, alinhado na vertical e horizontal, cor de fundo primário */}
      <div className='login d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
        {/*   p-5 é padding tamanho 5 */}
        <div className='form-container  p-xl-5 p-lg-5 p-md-4 p-sm-3 p-xs-3 rounded bg-white'>
          <form className='formgeral p-md-4 '>
            <h3 className='text-center'>Sign In</h3>
            {/* mb-2 é distância embaixo */}
            <div className='mb-2 classnameinput'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Enter Email'
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
            <div className='mb-2 textRememb'>
              {/* custom-control fornece  um rótulo, um ícone de marcação e um ponto de verificação */}
              <input
                type='checkbox'
                className='custom-control custom-check'
                id='check'
              />
              <label htmlFor='password' className='custom-input-label ms-2'>
                Remember password
              </label>
              <div className='d-grid'>
                <button className='btn btn-primary'>Sign In</button>
              </div>
            </div>
            <div className="paragfim">
            <p className='text-end mt-2 textSignup'>
              Forgot Password?{' '}
              <Link to='/signup' className='ms-2'>
                  Sign up?
              </Link>
            </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login