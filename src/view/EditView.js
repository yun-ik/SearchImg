import React, { PureComponent } from 'react';
import { TextField, Box, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { observer } from 'mobx-react';

@observer
class EditView extends PureComponent {
    render() {

        const { query, onSetQuery, onSetApi } = this.props;

        return (
            <Box className="searchBox">
                    <TextField id="standard-basic" label="Search"
                        variant="outlined" className="searchbar" value={query}
                        size="small"
                        classes={{ root: 'TextField' }}
                        InputProps={{
                            endAdornment: (
                                <IconButton aria-label="search"
                                    onClick={onSetApi}
                                    color='primary'
                                >
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                        onChange={(event) => onSetQuery(event.target.value)}
                    >
                    </TextField>
            </Box>
        )
    }
}

export default EditView;