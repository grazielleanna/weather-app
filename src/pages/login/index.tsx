import { Box, Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Image from "../../assets/img/image_login.svg";
import { Section } from "./style";
import { useHistory } from "react-router-dom";

const createFormSchema = yup.object().shape({
  username: yup.string().required("Nome obrigatório").min(3, 'O usuário precisa ter no mínimo 3 caracteres'),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .max(18, "A senha não pode ultrapassar 10 caracteres"),
});

export function Login() {
  const history = useHistory();
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(createFormSchema),
  });

  const { errors } = formState;

  async function sendForm(values: any) {
    history.push("/forecast");
  }

  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} style={{ textAlign: "center" }}>
          <img src={Image} alt="QA's" width="75%" />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            style={{
              backgroundColor: "#488399",
              width: "80%",
              borderRadius: "2rem",
              maxHeight: "583px",
            }}
          >
            <h1>Webinar - E.B.A.C</h1>
            <form
              onSubmit={handleSubmit(sendForm)}
              style={{
                backgroundColor: "#FFF",
                padding: "1.5rem 2rem",
                borderRadius: "2rem",
                width: "65%",
              }}
            >
              <div className="container-input">
                <TextField
                  label="Usuário"
                  type="text"
                  size="medium"
                  placeholder="Insira seu nome"
                  {...register("username")}
                  helperText={errors?.username?.message}
                  error={!!errors?.username}
                />
              </div>
              <div className="container-input">
                <TextField
                  label="Senha"
                  type="password"
                  size="medium"
                  placeholder="Insira sua senha"
                  {...register("password")}
                  helperText={errors?.password?.message}
                  error={!!errors?.username}
                />
              </div>
              <div className="forget">
                <a href="/">Esqueceu a sua senha?</a>
              </div>
              <Button type="submit" variant="contained">
                Acessar
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
