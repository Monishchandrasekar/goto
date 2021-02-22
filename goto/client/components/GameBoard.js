import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import StartButton from './StartButton'

const GameBoard = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div className="gameboard">
      <StartButton />
      <Card raised={true}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          />
          <Typography variant="body1" component="p">
            <b>
              Can you navigate life after college successfully with the cards
              you were dealt?
            </b>
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default GameBoard
