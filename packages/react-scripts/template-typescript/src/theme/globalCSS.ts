import { makeStyles } from '../component/home/node_modules/@material-ui/styles'
import { primaryFont } from '.'

/**
 * A hook that installs global CSS overrides.
 */
const useGlobalCSS = makeStyles({
  '@global': {
    body: {
      fontFamily: primaryFont,
    },
  },
})

export default useGlobalCSS
