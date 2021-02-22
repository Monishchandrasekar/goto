import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import {Card, CardContent, CardActions, Collapse} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {red} from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const Footer = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  function handleExpandClick() {
    setExpanded(!expanded)
  }

  const bull = <span className={classes.bullet}>•</span>
  return (
    <Card>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Typography variant="subtitle1">Data Sources</Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {bull} <b>The Atlantic</b>,{' '}
            <em>
              <a href="https://www.theatlantic.com/ideas/archive/2018/12/does-it-matter-where-you-go-college/577816/">
                Does It Matter Where You Go to College?
              </a>
            </em>
          </Typography>
          <Typography paragraph>
            {bull} <b>Emsi</b>,{' '}
            <em>
              <a
                href="https:
            //www.economicmodeling.com/how-your-school-affects-where-you-live/"
              >
                How Your School Affects Where You Live
              </a>
            </em>
          </Typography>

          <Typography paragraph>
            {bull} <b>Inc Magazine</b>,{' '}
            <em>
              <a href="https://www.inc.com/dorcas-cheng-tozun/prestigious-colleges-dont-lead-to-happiness-success.html">
                This Is What Actually Matters for Your Kids' Future Success
              </a>
            </em>
          </Typography>

          <Typography paragraph>
            {bull} <b>The National Bureau of Economic Rsearch</b>,{' '}
            <em>
              <a href="https://www.theatlantic.com/ideas/archive/2018/12/does-it-matter-where-you-go-college/577816/">
                Does It Matter Where You Go to College?
              </a>
            </em>
          </Typography>

          <Typography paragraph>
            {bull}
            <b>The Wall Street Journal</b>,{' '}
            <em>
              <a href="https://www.wsj.com/articles/the-student-debt-crisis-hits-hardest-at-historically-black-colleges-11555511327">
                The Student-Debt Crisis Hits Hardest at Historically Black
                Colleges
              </a>
            </em>
          </Typography>

          <Typography paragraph>
            {bull} <b>The National Bureau of Economic Rsearch</b>,{' '}
            <em>
              <a href="https://www.nber.org/papers/w15339">
                How large are returns to schooling? Hint: Money isn't everything
              </a>
            </em>
          </Typography>

          <Typography paragraph>
            {bull} <b>The MIT Press Journals</b>,{' '}
            <em>
              <a href="https://www.mitpressjournals.org/doi/10.1162/rest.91.4.717">
                The MIT Press Journals, The Effect of Attending the Flagship
                State University on Earnings: A Discontinuity-Based Approach
              </a>
            </em>
          </Typography>

          <Typography paragraph>
            {bull} <b>The National Bureau of Economic Rsearch</b>,{' '}
            <em>
              <a href="https://www.nber.org/papers/w23618">
                Mobility Report Cards: The Role of Colleges in Intergenerational
                Mobility
              </a>
            </em>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export default Footer
