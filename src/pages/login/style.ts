import styled from "styled-components";

export const Section = styled.section`
  margin: 0 1rem;
  h1 {
    color: #fff;
    font-size: 1.8rem;
  }
  .container-input {
    div {
      width: 100%;

      .Mui-focused {
        color: #488399;
      }

      :after {
        border-color: #488399;
      }
    }

    & + .container-input {
      margin-top: 1.5rem;
    }
  }

  button {
    margin-top: 2rem;
    width: 100%;
    background-color: #f4d38a;
  }

  .forget {
    margin-top: 1.4rem;
    font-weight: 500;

    a {
      text-decoration: none;
      color: #ea9393;
      transition: all 0.3s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
