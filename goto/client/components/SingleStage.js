import React, {Component} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions
} from '@material-ui/core'
import {connect} from 'react-redux'
//import {Link, history} from 'react-router-dom'
import ProgressBar from './ProgressBar'
import {setStage} from '../store/stage'

const SingleStage = props => {
  const classes = useStyles()
  const {topic, currentNum} = props

  let stageInfo
  let buttonTitle
  if (currentNum === 1) {
    stageInfo = props.stage1
    buttonTitle = 'Next'
  } else if (currentNum === 2) {
    stageInfo = props.stage2
    buttonTitle = 'Next'
  } else if (currentNum === 3) {
    stageInfo = props.stage3
    buttonTitle = 'End'
  }

  const handleSubmit = event => {
    if (props.currentNum !== 3) {
      event.preventDefault()
      props.setStage(props.currentNum + 1)
      props.history.push(`/stage-${props.currentNum + 1}`)
    } else {
      props.setStage(0)
      props.history.push(`/`)
    }
  }

  console.log({props})
  return (
    <div>
      {!currentNum ? (
        <ProgressBar />
      ) : (
        <div className="content">
          <Card raised={true} className={classes.card}>
            <CardContent className={classes.content}>
              <Typography
                //className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h3"
              >
                {topic}
              </Typography>
              <Typography variant="h6">{stageInfo}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handleSubmit}
                size="large"
                fullWidth={true}
                variant="outlined"
              >
                {buttonTitle}
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  stats: state.stats,
  currentNum: state.stage.currentNum,
  stage1: state.stage.stage1,
  stage2: state.stage.stage2,
  stage3: state.stage.stage3
})

const mapDispatchToProps = dispatch => ({
  setStage: num => dispatch(setStage(num))
})

const useStyles = makeStyles({
  card: {
    width: 600,
    height: 600,
    backgroundColor: '#94A6AB'
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:
      'https://i.pinimg.com/originals/bd/3c/da/bd3cdadf9d8562365c1b3f2db937616c.jpg'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleStage)
