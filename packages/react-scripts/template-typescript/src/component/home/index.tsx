import * as React from './node_modules/react'
import { makeStyles } from './node_modules/@material-ui/styles'
import { Theme } from './node_modules/@material-ui/core/styles/createMuiTheme'

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    fontSize: '2.0rem',
    color: theme.palette.primary.main,
  },
}))

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const classes = useStyles()

  return <div className={classes.hero}>Welcome to your sweet new project.</div>
}

export default Home
