import React, { PureComponent } from 'react';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { observer } from 'mobx-react';

@observer
class EditView extends PureComponent {
    render() {

        const {query, onSetQuery, onSetApi} = this.props;

        return (
            <form noValidate>
                <TextField id="standard-basic" label="Search"
                    variant="outlined" className="searchbar" value={query}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    onChange={(event) => onSetQuery(event.target.value)}
                >
                </TextField>
                <Button
                    onClick={onSetApi}
                    //onClick = {(event) => this.onSetApi(event)}
                    variant="contained" color='primary'>검색</Button>
            </form>
        )
    }
}

export default EditView;