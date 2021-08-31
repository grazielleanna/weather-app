
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Container, Header, Close, Search, Button, Main, ButtonOption } from './style'

interface DrawerSearchProps {
    open: any;
    onclose: any;
}

const DrawerSearch: React.FC<DrawerSearchProps> = ({ open, onclose }) => {

    return (
        <Drawer open={open} onClose={onclose} anchor="left" className="drawer-search">
            <Container>
                <Header>
                    <Close onClick={onclose}>
                        <CloseIcon />
                    </Close>

                    <Search>
                        <TextField
                            placeholder="search location"
                            id="filled-start-adornment"
                            className="w-full input"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                            }}
                            variant="outlined"
                        />
                        <Button>
                            Search
                        </Button>
                    </Search>
                </Header>

                <Main>
                    <ButtonOption>
                        London
                        <ArrowForwardIosIcon />
                    </ButtonOption>
                </Main>
            </Container>
        </Drawer>
    );
}

export default DrawerSearch;