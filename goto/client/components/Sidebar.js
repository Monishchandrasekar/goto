import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import MainChart from './MainChart'

const upstreamData = [
  {
    'income inequality': 1,
    unemployment: 1,
    testing: 1,
    'state funding': 1,
    'affirmative action': 1,
    race: 1,
    location: 1
  }
]

const downstreamData = [
  {
    'marriage rates': 1,
    'population growth': 1,
    'national debt': 1,
    health: 1,
    innovation: 1,
    unemployment: 1,
    'wealth gap': 1
  }
]

const Sidebar = () => {
  const classes = useStyles()

  return (
    <div className="sidebar">
      <Card raised={true}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="h2"
          >
            <b>
              The Big Picture: How College Admissions Is Affected By Other
              System
            </b>
          </Typography>
          <MainChart data={upstreamData} />
        </CardContent>
      </Card>
      <br />
      <br />
      <Card raised={true}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="h2"
          >
            <b>The Big Picture: How College Admissions Affects Other Systems</b>
          </Typography>
          <MainChart data={downstreamData} />
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

export default Sidebar
