import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import AcceptQuestList from './components/AcceptQuestList'

import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

function Copyright() {
  const { enqueueSnackbar }  = useSnackbar();

  const foo = useSelector(state=>state.foo);
  const handleClick = () => {
    enqueueSnackbar('I love hooks', { variant: 'success' });
};

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link onClick={handleClick}>
        {foo}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
      <AcceptQuestList />
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
