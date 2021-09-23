import { useContext, useEffect, useRef, useState } from 'react';
import Cookie from 'js-cookie';
import Formsy from 'formsy-react';

import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import SearchContext from '../../../context/Search';
import TextFieldFormsy from '../Input';

import { Container, Header, Close, Search, Button, Main, ButtonOption } from './style'

interface IDrawerSearchProps {
    open: any;
    onclose: any;
}

interface ICookieSearch{
    city: string;
}

const DrawerSearch: React.FC<IDrawerSearchProps> = ({ open, onclose }) => {
    const [cookieSearch, setCookieSearch] = useState<ICookieSearch[]>([]);
    const [isFormValid, setIsFormValid] = useState(false);
    const { setSearch } = useContext(SearchContext);
    const formRef = useRef(null);

    useEffect(() => {
        getCookie();
    }, [])

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    const handleSubmit = (model: any) => {
        let search = [];

        setSearch(model.search);

        let object = {
            city: model.search
        }

        search.push(...cookieSearch, object);
        Cookie.set('json-search-weather', JSON.stringify(search));
        setCookieSearch(search);
    }

    const getCookie = () => {
        const getCookie = Cookie.get('json-search-weather');
        if(getCookie){
            const resultCookie = JSON.parse(getCookie ? getCookie : '');
            setCookieSearch(resultCookie);
        }
    }

    const handleCity = (city: string) => {
        setSearch(city);
        onclose();
    }

    return (
        <Drawer open={open} onClose={onclose} anchor="left" className="drawer-search">
            <Container>
                <Header>
                    <Close onClick={onclose}>
                        <CloseIcon />
                    </Close>

                    <Formsy autoComplete="off" onValidSubmit={handleSubmit} onValid={enableButton} onInvalid={disableButton} ref={formRef}>
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
                                required
                            />
                            <Button disabled={!isFormValid}>
                                Buscar
                            </Button>
                        </Search>
                    </Formsy>
                </Header>

                <Main>
                    {
                        cookieSearch.map((item, index) => (
                            <ButtonOption key={index} onClick={() => handleCity(item.city)}>
                                {item.city}
                                <ArrowForwardIosIcon />
                            </ButtonOption>
                        ))
                    }

                </Main>
            </Container>
        </Drawer>
    );
}

export default DrawerSearch;