import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function InfoBlock() {
  return(
    <Alert severity="info" className='info'>
      <AlertTitle>Info</AlertTitle>
      This are no images yet — <strong>try to type something!</strong>
    </Alert>
  );
}