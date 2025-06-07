import Auth from './Auth'
import { Link as RouterLink } from 'react-router-dom'
import { Link as MUILink} from '@mui/material'
import { useCreateUser } from '../../hooks/useCreateUser'
import { useState } from 'react'
import { extractErrorMessage } from '../../utils/errors'

const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("")

  return (
    <Auth submitLabel="Sign Up" error={error} onSubmit={async ({email, password}) => {
      try {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password
            }
          }
        });
        setError("");
      } catch (error) {
        const errorMessage = extractErrorMessage(error);
        if(errorMessage){
          setError(errorMessage);
          return;
        }
        setError("Unknown error occured.")
      }
      
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

export default Signup
