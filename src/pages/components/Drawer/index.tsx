import { useContext, useRef, useState } from 'react';
import Formsy from 'formsy-react';

import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import SearchContext from '../../../context/Search';
import TextFieldFormsy from '../Input';

import { Container, Header, Close, Search, Button, Main, ButtonOption } from './style'

interface DrawerSearchProps {
    open: any;
    onclose: any;
}

const DrawerSearch: React.FC<DrawerSearchProps> = ({ open, onclose }) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const { setSearch } = useContext(SearchContext);
    const formRef = useRef(null);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    const handleSubmit = (model: any) => {
        setSearch(model.search);
    }

    return (
        <Drawer open={open} onClose={onclose} anchor="left" className="drawer-search">
            <Container>
                <Header>
                    <Close onClick={onclose}>
                        <CloseIcon />
                    </Close>

                    <Formsy autoComplete="off" onSubmit={handleSubmit} onValid={enableButton} onInvalid={disableButton} ref={formRef}>
                        <Search>
                            <TextFieldFormsy
                                name="search"
                                placeholder="insira um local"
                                id="filled-start-adornment"
                                className="w-full input"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                }}
                                variant="outlined"
                            />
                            <Button disabled={!isFormValid}>
                                Buscar
                            </Button>
                        </Search>
                    </Formsy>
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