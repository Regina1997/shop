import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography, alpha, styled } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { fetchBooksBySearch } from "../store/slices/books";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header({ handleCart, orderLen }) {
  const dispatch = useDispatch();

  const search = (str) => {
    setTimeout(() => {
      dispatch(fetchBooksBySearch(str))
    }, 500);  
  }

  return (
    <AppBar position="static" color="primary" sx={{ position: 'fixed', zIndex: 10 }}>
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          <Link key={orderLen} to={`/`} style={{ textDecoration: "none", color: "white" }}>
            Bookshop
          </Link> 
        </Typography>
        <Search>
            <SearchIconWrapper>
              <SearchIcon color="primary"/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => search(e.target.value.toLowerCase())}
            />
          </Search>
        <IconButton color="inherit" onClick={handleCart} sx={{ml: '1rem'}}>
          <Badge badgeContent={orderLen}>
            <ShoppingBasket color="secondary"/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
