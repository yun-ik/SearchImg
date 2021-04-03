import React, { PureComponent } from 'react';
import { GridList, GridListTile } from '@material-ui/core';

import { observer } from 'mobx-react';

@observer
class ImgListView extends PureComponent {
    render() {

        const { documents } = this.props;

        return (
            <GridList>
                {documents.map((documents) => (
                    <GridListTile key={documents.image_url}>
                        <img src={documents.thumbnail_url}/>
                        {/* <GridListTileBar/> */}
                    </GridListTile>
                ))}
            </GridList>
        )
    }
}

export default ImgListView;