import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export default function Snack({ isOpen, handleClose }) {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert security='info'>
        Added to cart
      </Alert>
    </Snackbar>
  )
}
