import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Heading(props: { title: string }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle1">{props.title}</Typography>
      </Box>
    </>
  );
}
