import Auth from './Auth'
import { Link as RouterLink } from 'react-router-dom'
import { Link as MUILink} from '@mui/material'

const Login = () => {
  return (
    <Auth submitLabel="Login" onSubmit={async () => {}} >
        {/* <Link to='/signup' style={{alignSelf: 'center'}}>
            <MUILink>Sign Up</MUILink>
        </Link> */}
        <MUILink
          component={RouterLink}
          to="/signup"
          style={{ alignSelf: 'center' }}
        >
          Sign Up
        </MUILink>
    </Auth>
  )
}

export default Login
