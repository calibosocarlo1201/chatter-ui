import Auth from './Auth'
import { Link as RouterLink } from 'react-router-dom'
import { Link as MUILink} from '@mui/material'
import { useCreateUser } from '../../hooks/useCreateUser'

const Login = () => {
  const [createUser] = useCreateUser()

  return (
    <Auth submitLabel="Sign Up" onSubmit={async ({email, password}) => {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password
          }
        }
      })
    }}>
        {/* <RouterLink  to='/login' style={{alignSelf: 'center'}}>
            <MUILink>Login</MUILink>
        </RouterLink> */}

        <MUILink
          component={RouterLink}
          to="/login"
          style={{ alignSelf: 'center' }}
        >
          Login
        </MUILink>

    </Auth>
  )
}

export default Login
