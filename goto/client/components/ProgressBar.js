import React from 'react'
import {makeStyles, CircularProgress} from '@material-ui/core'

const ProgressBar = () => {
  const classes = useStyles()

  return (
    <div>
      <CircularProgress className={classes.progress} />
      <CircularProgress className={classes.progress} color="secondary" />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}))

export default ProgressBar
