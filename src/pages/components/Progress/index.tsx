import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: '#FFF',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#FFEC65',
    },
  }),
)(LinearProgress);

export default BorderLinearProgress;