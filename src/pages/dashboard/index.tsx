import { useState, useEffect, useContext } from "react";

import { Grid } from "@material-ui/core";

import Location from "../components/Location";
import BorderLinearProgress from "../components/Progress";


import {
  Container,
  Content,
  Header,
  Button,
  Main,
  WatherContainer,
  WeatherCard,
  Title,
  Description,
  Max,
  Min,
  ContainerDetails,
  TitleDetails,
  ContainerCard,
  Card,
  CardSubTitle,
  CardTitle,
  CardDescription,
  CardPercentage,
  Percentage,
  Footer,
  TextFooter,
} from "./style";

import Clear from "../../assets/img/Clear.png";
import NightClear from "../../assets/img/NightClear.png";
import NightCloud from "../../assets/img/NightCloud.png";
import LightCloud from "../../assets/img/LightCloud.png";
import LightRain from "../../assets/img/LightRain.png";
import Thunderstorm from "../../assets/img/Thunderstorm.png";
import Sleet from "../../assets/img/Sleet.png";
import Snow from "../../assets/img/Snow.png";
import Fog from "../../assets/img/Fog.png";
import ImgCloud from "../../assets/img/HeavyCloud.png";

import api, { apiGeo, apiWoeid } from "../../services/api";

import SearchContext from "../../context/Search";

interface IData {
  cid: string;
  city: string;
  city_name: string;
  condition_code: string;
  condition_slug: string;
  currently: string;
  date: string;
  description: string;
  forecast: IForecast[];
  humidity: number;
  wind_speedy: string;
  temp: number;
  sunrise: string;
  sunset: string;
}

interface IForecast {
  condition: string;
  date: string;
  description: string;
  max: number;
  min: number;
  weekday: string;
}

interface IWoeid {
  cid: string;
  country: string;
  name: string;
  region: string;
  woeid: number;
}

const Dashboard = () => {
  const { search } = useContext(SearchContext);
  const [data, setData] = useState({} as IData);
  const [woeid, setWoeid] = useState({} as IWoeid)
  const [forecast, setForecast] = useState<IForecast[]>([]);
  const [fahrenheit, setFahrenheit] = useState(false);
  const wind = data.wind_speedy?.split(" ");
  const sunrise = data?.sunrise?.split(" ");
  const sunset = data?.sunset?.split(" ");

  useEffect(() => {
    if(search){
      getWoeid();
    }
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [woeid])

  useEffect(() => {
    if (data) {
      updateForecast();
    }
    // eslint-disable-next-line
  }, [data]);

  const getWoeid = async () => {
    try {
      const { data: response } = await apiWoeid.get(`&city_name=${search ? search : 'São Paulo'}`);
      setWoeid(response);
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const { data: response } = await api.get(`&woeid=${woeid.woeid}`);
      setData(response.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getLocation = async () => {
    try {
      const { data: response } = await apiGeo.get('');
      setData(response.results)
    } catch (e) {
      console.log(e)
    }
  }

  const updateForecast = () => {
    const arrayForecast = data?.forecast;
    arrayForecast?.shift();
    setForecast(arrayForecast);
  };

  const imgCondition = (condition: string) => {
    switch (condition) {
      case "cloudly_day":
        return <img src={LightCloud} width="100%" alt="cloudly_day" />;
      case "clear_day":
        return <img src={Clear} width="100%" alt="clear_day" />;

      case "clear_night":
        return <img src={NightClear} width="100%" alt="clear_night" />;

      case "cloudly_night":
        return <img src={NightCloud} width="100%" alt="cloudly_night" />;

      case "rain":
        return <img src={LightRain} width="100%" alt="rain" />;

      case "storm":
        return <img src={Thunderstorm} width="100%" alt="storm" />;

      case "snow":
        return <img src={Snow} width="100%" alt="snow" />;

      case "hail":
        return <img src={Sleet} width="100%" alt="hail" />;

      case "fog":
        return <img src={Fog} width="100%" alt="fog" />;

      case "cloud":
        return <img src={ImgCloud} width="100%" alt="cloud" />;
    }
  };

  return (
    <Container>
      <Location data={data} fahrenheit={fahrenheit} getLocation={getLocation} />

      <Content>
        <Header>
          <Button className={`${!fahrenheit ? 'celsius' : 'fahrenheit'}`} onClick={() => setFahrenheit(false)}>ºC</Button>
          <Button className={`${fahrenheit ? 'celsius' : 'fahrenheit'}`} onClick={() => setFahrenheit(true)}>ºF</Button>
        </Header>

        <Main>
          <WatherContainer>
            {forecast?.slice(0, 5).map((item, key) => (
              <WeatherCard key={key}>
                <Title>{item.weekday}, {item.date}</Title>
                {imgCondition(item.condition)}
                <Description>
                  <Max>{!fahrenheit ? item?.max : Math.trunc((item.max * 1.8) + 32)} {!fahrenheit ? 'ºC' : 'ºF'}</Max>
                  <Min>{!fahrenheit ? item?.min : Math.trunc((item.min * 1.8) + 32)} {!fahrenheit ? 'ºC' : 'ºF'}</Min>
                </Description>
              </WeatherCard>
            ))}
          </WatherContainer>

          <ContainerDetails>
            <TitleDetails>Destaques de hoje</TitleDetails>

            <ContainerCard>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardSubTitle>Status do vento</CardSubTitle>
                    <CardTitle>
                      <span>{wind ? wind[0] : ""}</span> {wind ? wind[1] : ""}
                    </CardTitle>
                    <CardDescription>{wind ? wind[1] : ""}</CardDescription>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardSubTitle>Umidade</CardSubTitle>
                    <CardTitle>
                      <span>{data.humidity}</span> %
                    </CardTitle>
                    <CardDescription>
                      <CardPercentage>
                        <Percentage>0</Percentage>
                        <Percentage>50</Percentage>
                        <Percentage>100</Percentage>
                      </CardPercentage>
                      <BorderLinearProgress
                        variant="determinate"
                        value={data.humidity}
                      />
                      <Percentage className="right">%</Percentage>
                    </CardDescription>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardSubTitle>Nascer do sol</CardSubTitle>
                    <CardTitle>
                      <span>{sunrise ? sunrise[0] : ""}</span>{" "}
                      {sunrise ? sunrise[1] : ""}
                    </CardTitle>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardSubTitle>Pôr do sol</CardSubTitle>
                    <CardTitle>
                      <span>{sunset ? sunset[0] : ""}</span>{" "}
                      {sunset ? sunset[1] : ""}
                    </CardTitle>
                  </Card>
                </Grid>
              </Grid>
            </ContainerCard>
          </ContainerDetails>
        </Main>

        <Footer>
          <TextFooter>
            criado por <a href="https://github.com/grazielleanna/" target="_blank" rel="noreferrer">Grazielle Conceição</a> - devChallenges.io
          </TextFooter>
        </Footer>
      </Content>
    </Container>
  );
};

export default Dashboard;
