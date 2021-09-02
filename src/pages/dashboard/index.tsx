import { useState, useEffect } from "react";

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
import api from "../../services/api";

interface IData{
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

interface IForecast{
  condigiton: string;
  date: string;
  description: string;
  max: number;
  min: number;
}

const Dashboard = () => {
  const [data, setData] = useState({} as IData);
  const [forecast, setForecast] = useState<IForecast[]>([]);
  const wind = data.wind_speedy.split(' ');

  console.log(data)

  const getData = async () => {
    const { data: response } = await api.get('&woeid=455910');
    setData(response.results);
  }

  function updateForecast(){
    setForecast(data?.forecast);
  }

  console.log(wind);

  useEffect(() => {
    getData();
    updateForecast()
  }, []);


  return (
    <Container>
      <Location />

      <Content>
        <Header>
          <Button className="celsius">ºC</Button>
          <Button className="fahrenheit">ºF</Button>
        </Header>

        <Main>
          <WatherContainer>
            <WeatherCard>
              <Title>Tomorrow</Title>
              <img src={LightCloud} width="100%" />
              <Description>
                <Max>16ºC</Max>
                <Min>11ºC</Min>
              </Description>
            </WeatherCard>
          </WatherContainer>

          <ContainerDetails>
            <TitleDetails>Today's Hightlights</TitleDetails>

            <ContainerCard>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardSubTitle>Wind Status</CardSubTitle>
                    <CardTitle>
                      <span>{wind[0]}</span> {wind[1]}
                    </CardTitle>
                    <CardDescription>{wind[1]}</CardDescription>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card>
                    <CardSubTitle>Humidity</CardSubTitle>
                    <CardTitle>
                      <span>{data.humidity}</span> %
                    </CardTitle>
                    <CardDescription>
                      <CardPercentage>
                        <Percentage>0</Percentage>
                        <Percentage>50</Percentage>
                        <Percentage>100</Percentage>
                      </CardPercentage>
                      <BorderLinearProgress variant="determinate" value={data.humidity} />
                      <Percentage className="right">%</Percentage>
                    </CardDescription>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card>
                    <CardSubTitle>Visibility</CardSubTitle>
                    <CardTitle>
                      <span>6,4</span> miles
                    </CardTitle>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card>
                    <CardSubTitle>Air Pressure</CardSubTitle>
                    <CardTitle>
                      <span>998</span> mb
                    </CardTitle>
                  </Card>
                </Grid>
              </Grid>
            </ContainerCard>
          </ContainerDetails>
        </Main>

        <Footer>
          <TextFooter>
            created by <span>Grazielle Conceição</span> - devChallenges.io
          </TextFooter>
        </Footer>
      </Content>
    </Container>
  );
};

export default Dashboard;
