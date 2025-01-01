import Typography from '@mui/material/Typography';
import { MuiLinkForNextJs as Link } from './MuiLinkForNextJs';

const Copyright = () => {
  return (
    <Typography sx={{ pt: 3 }} textAlign="center" variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        SILVA tuning
      </Link>{' '}
      {'2021'}
      {'.'}
    </Typography>
  );
}

export default Copyright;
