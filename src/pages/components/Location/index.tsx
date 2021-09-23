import { useState } from "react";

import MyLocationIcon from "@material-ui/icons/MyLocation";
import RoomIcon from "@material-ui/icons/Room";

import {
  Container,
  Header,
  Button,
  ButtonLocation,
  Main,
  Footer,
  Icon,
  Temperature,
  Cloud,
} from "./style";

import Clear from "../../../assets/img/Clear.png";
import NightClear from "../../../assets/img/NightClear.png";
import NightCloud from "../../../assets/img/NightCloud.png";
import LightCloud from "../../../assets/img/LightCloud.png";
import LightRain from "../../../assets/img/LightRain.png";
import Thunderstorm from "../../../assets/img/Thunderstorm.png";
import Sleet from "../../../assets/img/Sleet.png";
import Snow from "../../../assets/img/Snow.png";
import Fog from "../../../assets/img/Fog.png";
import ImgCloud from "../../../assets/img/HeavyCloud.png";

import DrawerSearch from "../Drawer";
import { useEffect } from "react";
import moment from "moment";
import "moment/locale/pt-br";

interface IData {
  data: IInformations;
  fahrenheit: boolean;
  getLocation: Function;
}

interface IInformations {
  cid: string;
  city: string;
  city_name: string;
  condition_code: string;
  condition_slug: string;
  currently: string;
  date: string;
  description: string;
  humidity: number;
  wind_speedy: string;
  temp: number;
  sunrise: string;
  sunset: string;
}

interface ICondition {
  [key: string]: string;
}

const Location: React.FC<IData> = ({ data, fahrenheit, getLocation }) => {
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState("");

  const drawerOpen = () => {
    setOpen(true);
  };

  const drawerClose = () => {
    setOpen(false);
  };

  const setImgCondition = () => {
    const condition = data?.condition_slug;

    switch (condition) {
      case "cloudly_day":
        setCondition(LightCloud);
        break;

      case "clear_day":
        setCondition(Clear);
        break;

      case "clear_night":
        setCondition(NightClear);
        break;

      case "cloudly_night":
        setCondition(NightCloud);
        break;

      case "rain":
        setCondition(LightRain);
        break;

      case "storm":
        setCondition(Thunderstorm);
        break;

      case "snow":
        setCondition(Snow);
        break;

      case "hail":
        setCondition(Sleet);
        break;

      case "fog":
        setCondition(Fog);
        break;
      
      case "cloud":
        setCondition(ImgCloud);
        break;
    }
  };

  const conditionCode: ICondition = {
    "0": "Tempestade tropical",
    "1": "Tempestade tropical",
    "2": "Furacão",
    "3": "Tempestades severas",
    "4": "Tempestades",
    "5": "Misto de neve e chuva",
    "6": "Misto chuva e gelo",
    "7": "Misto neve e gelo",
    "8": "Geada fina",
    "9": "Chuviscos",
    "10": "Congelamento chuva",
    "11": "Alguns chuviscos",
    "12": "Alguns chuviscos",
    "13": "Neve baixa",
    "14": "Tempestade com neve",
    "15": "Ventania com neve",
    "16": "Neve",
    "17": "Granizo",
    "18": "Gelo",
    "19": "Poeira",
    "20": "Neblina",
    "21": "Tempestade de areia",
    "22": "Fumacento",
    "23": "Vento acentuado",
    "24": "Ventania",
    "25": "Tempo frio",
    "26": "Tempo nublado",
    "27": "Tempo limpo",
    "28": "Tempo nublado",
    "29": "Parcialmente nublado",
    "30": "Parcialmente nublado",
    "31": "Tempo limpo",
    "32": "Ensolarado",
    "33": "Estrelado",
    "34": "Ensolarado com muitas nuvens",
    "35": "Misto chuva e granizo",
    "36": "Ar quente",
    "37": "Tempestades isoladas",
    "38": "Trovoadas dispersas",
    "39": "Trovoadas dispersas",
    "40": "Chuvas esparsas",
    "41": "Pesados neve",
    "42": "Chuviscos com neve",
    "43": "Neve pesada",
    "44": "Sol com poucas nuvens",
    "45": "Chuva",
    "46": "Queda de neve",
    "47": "Tempestades isoladas",
    "48": "Serviço não disponível",
  };

  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const date = moment().format("llll").split(" ");

  useEffect(() => {
    setImgCondition();
    // eslint-disable-next-line
  }, [data]);

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
            Procure por lugares
          </Button>

          <ButtonLocation onClick={() => getLocation()}>
            <MyLocationIcon />
          </ButtonLocation>
        </Header>

        <Main>
          <Icon>
            <img src={condition} alt="Icon" />
          </Icon>

          <Temperature>
            <h2>
              {!fahrenheit ? data?.temp : Math.trunc((data?.temp * 1.8) + 32)} <span>{!fahrenheit ? 'ºC' : 'ºF'}</span>
            </h2>

            <h4>{conditionCode[data.condition_code]}</h4>
          </Temperature>
        </Main>

        <Footer>
          <p>
            Hoje {capitalizeFirstLetter(date[0])} {date[1]}{" "}
            {capitalizeFirstLetter(date[3])}
          </p>
          <p className="location">
            <RoomIcon />
            {data.city_name}
          </p>
        </Footer>
      </Container>

      <DrawerSearch open={open} onclose={drawerClose} />
    </>
  );
};

export default Location;
