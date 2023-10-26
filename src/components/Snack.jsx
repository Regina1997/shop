import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hideSnack } from '../store/slices/snack';

export default function Snack() {
  const { visible } = useSelector(state => state.snack);
  const dispatch = useDispatch();

  return (
    <Snackbar open={visible} onClose={() => dispatch(hideSnack())} autoHideDuration={3000}>
      <Alert security='info'>
        Добавлено в корзину
      </Alert>
    </Snackbar>
  )
}
