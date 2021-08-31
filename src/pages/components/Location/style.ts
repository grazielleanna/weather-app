import styled from 'styled-components';

export const Container = styled.section`
    background: #1E213A;
    position: relative;
    width: 28.688rem;
    height: 100vh;
    left: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;

    @media (max-width: 1919px){
        height: auto
    }

    @media (max-width: 1023px){
        height: auto;
        width: 100%;
        overflow: hidden;
    }
`;

export const Cloud = styled.div`
    position: absolute;
    top: 7rem;
    left: -5rem;

    img{
        width: 80%;
        opacity: .05;
    }

    &.two{
        top: 18rem;

        img{
            width: 90%;
        }
    }

    &.three{
        left: unset;
        right: -6rem;
    }

    &.four{
        left: unset;
        right: -6rem;
        top: 23rem;

        img{
            width: 60%
        }
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 2rem 3rem 2rem;
`;

export const Button = styled.button`
    background: #6E707A;
    color: #FFF;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: .9rem;
    line-height: 1.1rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: .7rem;
    border: none;
`;

export const ButtonLocation = styled.button`
    width: 40px;
    height: 40px;

    background: #6E707A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border: none;
    border-radius: 50%;

    svg{
        color: #FFF;
    }
`;

export const Main = styled.main``;

export const Icon = styled.div`
    text-align: center;
`;

export const Temperature = styled.div`
    text-align: center;

    h2{
        font-size: 8rem;
        font-weight: 500;
        color: #E7E7EB;

        display: flex;
        align-items: baseline;
        justify-content: center;

        span{
            margin-left: .2rem;
            font-size: 2.5rem;
            color: #A09FB1;
        }
    }

    h4{
        font-size: 1.8rem;
        font-weight: 500;
        color: #A09FB1;
        line-height: 42px;
    }
`;


export const Footer = styled.footer`
    text-align: center;
    color: #88869D;

    p{
        font-size: 1rem;
        line-height: 21px;

        &.location{
            display: flex;
            justify-content: center;
            align-items: center;

            margin-top: 2rem;
        }
    }
`;
