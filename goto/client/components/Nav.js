import React from 'react'
import {Link} from 'react-router-dom'
import {
  makeStyles,
  Toolbar,
  AppBar,
  Button,
  Typography
} from '@material-ui/core/'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#1B503E',
    color: 'white'
  },
  menuButton: {
    marginRight: 10,
    color: 'white'
  },
  title: {
    flexGrow: 1,
    color: 'white'
  }
}))

const Nav = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.navbar}>
          <Typography variant="h6" className={classes.title}>
            The Game of Life After College
          </Typography>
          <Link to="/">
            <Button varient="text" size="large" color="white">
              Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
