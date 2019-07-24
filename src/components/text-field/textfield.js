
import React from 'react';

import TextField from '@material-ui/core/TextField';

export default class OutlinedTextFields extends React.Component {

    state = {
        value: "Currency",
        textData: []
    }

    handleChange = name => event => {
        this.setState({ value: event.target.value });
    };

    componentWillMount() {
        const textData = this.props;
        this.setState({ textData: textData, value: textData.value });
    }
    render() {



        const { classes } = this.props
        const textData = this.props;

        return (
            <form style={{ display: 'inline', marginRight: '1em' }}>
                {
                    this.state.textData.type === 'dropDown' ? (
                        <TextField
                            select
                            style={{ width: '14em', marginTop: '2em' }}
                            label={this.state.textData.label}
                            value={this.state.value}
                            onChange={this.handleChange('currency')}
                            SelectProps={{
                                native: true,
                                // MenuProps: {
                                //     className: this.state.textData,
                                // },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {this.state.textData.data.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    ) : (
                            <TextField
                                id="outlined-name"
                                label={this.state.textData.label}
                                // className={classes.textField}
                                value={this.state.value}
                                style={{ marginTop: '2em', width: '30em ' }}
                                onChange={textData.onChanging}
                                margin="normal"
                                variant="outlined"
                            />
                        )
                }
            </form>
        );
    }
}
