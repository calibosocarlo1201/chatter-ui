import { Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import router from "../Routes";

const Branding = () => {
  return (
    <>
        <SendIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => router.navigate('/')}
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
        >
        SEIGCHAT
        </Typography>
</>
  )
}

export default Branding
