import React, { PureComponent } from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
//import { withStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';

// const styles = {
//     GridListContent: {
//       backgroundColor: 'red',
//     },
//   };

//@withStyles(styles)
@observer
class ImgListView extends PureComponent {
    render() {
        const { documents } = this.props;
        return (
            <GridList cols={5} spacing={15}>
                {documents.map((documents) => (
                    <GridListTile key={documents.image_url}
                        classes={{ tile: 'GridListImg' }}>
                        <img src={documents.thumbnail_url} alt=""
                        />
                        <GridListTileBar
                            //className={this.props.classes.GridListContent}
                            classes={{
                                root: 'GridListTitle',
                                titleWrap: 'GridListTitleWrap',
                            }}
                            title={documents.display_sitename}
                            subtitle={<span>{documents.doc_url}</span>}
                            onClick={() => window.open(documents.doc_url)}
                        />
                    </GridListTile>
                ))}
            </GridList>
        )
    }
}

export default ImgListView;