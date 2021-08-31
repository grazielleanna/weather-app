import { useState } from 'react';

import MyLocationIcon from '@material-ui/icons/MyLocation';
import RoomIcon from '@material-ui/icons/Room';

import { Container, Header, Button, ButtonLocation, Main, Footer, Icon, Temperature, Cloud } from './style';
import Img from '../../../assets/img/Shower.png';
import ImgCloud from '../../../assets/img/HeavyCloud.png';
import DrawerSearch from '../Drawer';


const Location = () => {
    const [open, setOpen] = useState(false);

    const drawerOpen = () => {
        setOpen(true);
    }

    const drawerClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Container>
                <Cloud>
                    <img src={ImgCloud} alt="Icon Cloud" />
                </Cloud>

                <Cloud className="two">
                    <img src={ImgCloud} alt="Icon Cloud" />
                </Cloud>

                <Cloud className="three">
                    <img src={ImgCloud} alt="Icon Cloud" />
                </Cloud>

                <Cloud className="four">
                    <img src={ImgCloud} alt="Icon Cloud" />
                </Cloud>


                <Header>
                    <Button type="submit" className="drawer" onClick={drawerOpen}>
                        Search for places
                    </Button>

                    <ButtonLocation>
                        <MyLocationIcon />
                    </ButtonLocation>
                </Header>

                <Main>
                    <Icon>
                        <img src={Img} alt="Icon" />
                    </Icon>

                    <Temperature>
                        <h2>
                            15 <span>ºC</span>
                        </h2>

                        <h4>
                            Shower
                        </h4>
                    </Temperature>
                </Main>

                <Footer>
                    <p>Today Fri, 5 Jun</p>
                    <p className="location">
                        <RoomIcon />
                        Helsinki
                    </p>
                </Footer>
            </Container>

            <DrawerSearch open={open} onclose={drawerClose} />

        </>
    )
}

export default Location;