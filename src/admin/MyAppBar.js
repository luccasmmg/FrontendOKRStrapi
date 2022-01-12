import { AppBar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../logo.svg';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <img width="7%" src={Logo} alt="Logo" />
            <span className={classes.spacer} />
        </AppBar>
    );
};

export default MyAppBar;
