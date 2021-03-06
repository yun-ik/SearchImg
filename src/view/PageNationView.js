import React, { PureComponent } from 'react';
import { Container, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { observer } from 'mobx-react';

@observer
class PageNationView extends PureComponent {
    render() {
        const { page, nowpage, PrepageNation, NextpageNation, setNowPage } = this.props;
        return (
            <Container classes={{ root: 'pagecontainer' }}>
                { Array.isArray(page) && page.length ?
                    <Button onClick={PrepageNation}
                        variant="outlined" color="primary"><ArrowBackIosIcon /></Button>
                    :
                    <Container />
                }

                {page.map((page, index) => (
                    page.page == nowpage ?
                        <Button key={index} variant="contained"
                            onClick={(event) => setNowPage(event.target.innerText)}
                        >
                            {page.page}
                        </Button>
                        :
                        <Button key={index} variant="outlined"
                            onClick={(event) => setNowPage(event.target.innerText)}
                        >
                            {page.page}
                        </Button>
                ))}


                { Array.isArray(page) && page.length ?
                    <Button onClick={NextpageNation}
                        variant="outlined" color="primary"><ArrowForwardIosIcon /></Button>
                    :
                    <Container />
                }
            </Container>
        )
    }
}

export default PageNationView;