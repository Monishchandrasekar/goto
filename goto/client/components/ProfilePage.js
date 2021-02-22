import React from 'react'
import {getStats} from '../store/profile-stats'
import {setStage, getStages} from '../store/stage'
import {connect} from 'react-redux'
import {Link, history} from 'react-router-dom'
import {
  Card,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  makeStyles,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundImage:
      'https://i.pinimg.com/originals/bd/3c/da/bd3cdadf9d8562365c1b3f2db937616c.jpg'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 350
  }
}))

const ProfilePage = props => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    age: 0,
    gender: '',
    race: '',
    collegeTier: '',
    income: ''
  })

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.setStats(values)
    props.getStages(values)
    props.setStage(props.currentStage + 1)
    props.history.push('/stage-1')
  }

  return (
    <Card className="profile-content">
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="age-required">Age</InputLabel>
          <Select
            value={values.age}
            onChange={handleChange}
            name="age"
            inputProps={{id: 'age-required'}}
            className={classes.selectEmpty}
          >
            <MenuItem value="20">20 - 29</MenuItem>
            <MenuItem value="30">30 - 39</MenuItem>
            <MenuItem value="40">40 - 49</MenuItem>
            <MenuItem value="50">50 - 59</MenuItem>
            <MenuItem value="60">60 - 69</MenuItem>
            <MenuItem value="70">70 - 79</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="race-required">Race</InputLabel>
          <Select
            value={values.race}
            onChange={handleChange}
            name="race"
            inputProps={{id: 'race-required'}}
            className={classes.selectEmpty}
          >
            <MenuItem value="Black/African-American">
              Black/African-American
            </MenuItem>
            <MenuItem value="White/Caucasian">White/Caucasian</MenuItem>
            <MenuItem value="Pacific Islander/Asian-American">
              Pacific Islander/Asian-American
            </MenuItem>
            <MenuItem value="Native American">Native American</MenuItem>
            <MenuItem value="Hispanic/Latino">Hispanic/Latino</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="gender-required">Gender</InputLabel>
          <Select
            value={values.gender}
            onChange={handleChange}
            name="gender"
            inputProps={{
              id: 'gender-required'
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={`${classes.formControl} content`}>
          <InputLabel htmlFor="collegeTier-required">
            Type of College
          </InputLabel>
          <Select
            value={values.collegeTier}
            onChange={handleChange}
            name="collegeTier"
            inputProps={{
              id: 'collegeTier-required'
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="elite college">Elite Private College</MenuItem>
            <MenuItem value="state university">State University</MenuItem>
            <MenuItem value="community college">Community College</MenuItem>
            <MenuItem value="online college">Online College</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={`${classes.formControl} content`}>
          <InputLabel htmlFor="income-required">Parents' Income</InputLabel>
          <Select
            value={values.income}
            onChange={handleChange}
            name="income"
            inputProps={{
              id: 'income-required'
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="working">Working Class</MenuItem>
            <MenuItem value="middle">Middle Class</MenuItem>
            <MenuItem value="upper">Upper Class</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}

const mapStateToProps = state => ({
  currentStage: state.stage.currentNum
})

const mapDispatchToProps = dispatch => ({
  setStats: stats => dispatch(getStats(stats)),
  getStages: stats => dispatch(getStages(stats)),
  setStage: num => dispatch(setStage(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
