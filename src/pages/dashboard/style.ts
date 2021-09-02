import styled from 'styled-components';

export const Container = styled.section`
    background: #100E1D;

    display: flex;

    @media (min-width: 1024px) and (max-width: 1199px) {
        height: 100vh;
    }

    @media (max-width: 1023px){
        flex-direction: column;
    }
`;

export const Content = styled.main`
    padding: 2rem 9rem;
    width: 61%;

    @media (max-width: 767px){
        width: 100%;
        padding: 2rem 0;
    }
`;

export const Header = styled.header`
    text-align: right;
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    width: 2.5rem;
    height: 2.5rem;

    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;

    border-radius: 50%;

    &.celsius{
        background: #E7E7EB;
        color: #110E3C;
        margin-right: 1rem;
    }

    &.fahrenheit{
        background: #585676;
        color: #E7E7EB;
    }
`;

export const Main = styled.main`
    margin-top: 4rem;
`;

export const WatherContainer = styled.section`
    display: flex;
    
    @media (max-width: 767px){
        padding: 0 .8rem;
    }
`;

export const WeatherCard = styled.div`
    background: #1E213A;
    width: 7.5rem;
    text-align: center;
    padding: .7rem 0;

    img{
        width: 60%;
    }
`;

export const Title = styled.h5`
    font-size: 1rem;
    font-weight: 500;
    color: #E7E7EB;
    margin: 0 0 .8rem 0;
`;

export const Description = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Max = styled.p`
    color: #E7E7EB;
    margin-bottom: .5rem;
`;

export const Min = styled.p`
    color: #A09FB1;
    margin-bottom: .5rem;
`;

export const ContainerDetails = styled.section`
    margin-top: 4rem;

    @media (max-width: 767px){
        padding: 0 .8rem;
    }
`;

export const TitleDetails = styled.h2`
    color: #E7E7EB;
`;

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1919px){
        justify-content: space-between;
    }
`;

export const Card = styled.div`
    height: 150px;

    background: #1E213A;
    color: #FFF;

    text-align: center;
    padding: 1.7rem 2rem;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1919px){
        width: 250px;
    }

    @media (max-width: 767px){
        max-width: 100%;
        margin: 0 auto 1rem auto;
    }

    &:nth-child(1), &:nth-child(3){
        margin-right: 1rem;

        @media (max-width: 1023px){
            margin-right: 0;
        }
    }
`;

export const CardSubTitle = styled.p`
    font-size: .9rem;
    margin: 0;
`;

export const CardTitle = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    margin: 1rem 0;

    span{
        font-size: 4rem;
        font-weight: bold;
    }
`;

export const CardDescription = styled.p`
    font-size: .8rem;
    margin: 0;
`;

export const CardPercentage = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: .5rem;
    text-align: right;
`;

export const Percentage = styled.small`
    color: #FFF;
    font-size: .7rem;
`;

export const Footer = styled.footer`
`;

export const TextFooter = styled.p`
    font-size: .8rem;
    color: #A09FB1;
    text-align: center;
    margin: 0;
`;