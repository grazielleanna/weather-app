import { useState, useEffect, useContext } from "react";

import { Grid } from "@material-ui/core";

import Location from "../components/Location";
import BorderLinearProgress from "../components/Progress";

import LightCloud from "../../assets/img/LightCloud.png";

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

import api, { apiWoeid } from "../../services/api";

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

interface IWoeid{
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
  const wind = data.wind_speedy?.split(" ");
  const sunrise = data?.sunrise?.split(" ");
  const sunset = data?.sunset?.split(" ");

  useEffect(() => {
    getWoeid();
  }, [search]);

  useEffect(() => {
    getData();
  }, [woeid])

  useEffect(() => {
    if (data) {
      updateForecast();
    }
  }, [data]);

  const getWoeid = async () => {
    const { data: response } = await apiWoeid.get(`&city_name=${search}`);
    setWoeid(response);
  }

  const getData = async () => {
    const { data: response } = await api.get(`&woeid=${woeid.woeid}`);
    setData(response.results);
  };

  const updateForecast = () => {
    const arrayForecast = data?.forecast;
    arrayForecast?.shift();
    setForecast(arrayForecast);
  };

  return (
    <Container>
      <Location data={data} />

      <Content>
        <Header>
          <Button className="celsius">ºC</Button>
          <Button className="fahrenheit">ºF</Button>
        </Header>

        <Main>
          <WatherContainer>
            {forecast?.map((item, key) => (
              <WeatherCard key={key}>
                <Title>{item.weekday}</Title>
                <img src={LightCloud} width="100%" />
                <Description>
                  <Max>{item.max} ºC</Max>
                  <Min>{item.min} ºC</Min>
                </Description>
              </WeatherCard>
            ))}
          </WatherContainer>

          <ContainerDetails>
            <TitleDetails>Destaques de hoje</TitleDetails>

            <ContainerCard>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardSubTitle>Status do vento</CardSubTitle>
                    <CardTitle>
                      <span>{wind ? wind[0] : ""}</span> {wind ? wind[1] : ""}
                    </CardTitle>
                    <CardDescription>{wind ? wind[1] : ""}</CardDescription>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
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

                <Grid item xs={12} md={6}>
                  <Card>
                    <CardSubTitle>Nascer do sol</CardSubTitle>
                    <CardTitle>
                      <span>{sunrise ? sunrise[0] : ""}</span>{" "}
                      {sunrise ? sunrise[1] : ""}
                    </CardTitle>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
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
            criado por <span>Grazielle Conceição</span> - devChallenges.io
          </TextFooter>
        </Footer>
      </Content>
    </Container>
  );
};

export default Dashboard;
