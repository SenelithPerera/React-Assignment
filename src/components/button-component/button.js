import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export default class ContainedButtons extends React.Component {

    render() {
        const useStyles = makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
            },
            input: {
                display: 'none',
            },
        }));
        // const classes = useStyles();
        const buttonData = this.props;
        return (
            <div>
                <Button variant="contained" color="primary">
                    {buttonData.buttonText}
                </Button>
            </div>
        );
    }
}
