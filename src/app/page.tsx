import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import Image from 'next/image';

export default function Component() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", display: "flex" }}
    >
      <Card>
        <CardHeader
          title="Login"
          subheader="Coloque seu email abaixo para acessar sua conta"
        />
        <CardContent>
          <form>
            <div style={{ marginBottom: "16px" }}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                placeholder="m@example.com"
                fullWidth
                required
                type="email"
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <TextField
                id="password"
                label="Senha"
                variant="outlined"
                fullWidth
                required
                type="password"
              />
            </div>
          </form>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/doguinho-sem-fundo.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "gray", 
              },
            }}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
