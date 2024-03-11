"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Button,
  Grid,
  Box,
  Paper
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import { usePostSignIn } from "../hooks/reactQuery/usePostSingIn";


interface IFormInput {
  email: string;
  password: string;
}

export default function Component() {
  const [userData, setUserData] = useState<IFormInput>({
    email: "",
    password: "",
  });
  const mutate = usePostSignIn(userData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: userData
  });

  
const onSubmit: SubmitHandler<IFormInput> = async () => mutate.mutateAsync();

    
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", display: "flex", background: "#EFF9F5" }}
    >
       <form onSubmit={handleSubmit(onSubmit)}>
      <Paper elevation={3} sx={{backgroundImage: 'url("/patinhas.png")', backgroundSize: 'cover', width: "30rem",}}>
      
         <Box style={{ display: "flex", justifyContent: "center", padding: 10 }}>
            <Image
              src="/FurryRide.png"
              width={200}
              height={80}
              alt="Logo"
            />
          </Box>
        <CardContent>
         
            <Box style={{ marginBottom: "16px" }}>
              <TextField
                {...register("email", {
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de e-mail inválido",
                  },
                })}
                id="email"
                label="Email"
                variant="outlined"
                placeholder="m@example.com"
                fullWidth
                type="email"
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
                value={userData.email}
                error={!!errors.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Box>
            <Box style={{ marginBottom: "16px" }}>
              <TextField
                id="password"
                label="Senha"
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
                type="password"
                value={userData.password}
                {...register("password", { required: "Campo obrigatório" })}
                error={!!errors.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Box>
        
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/doguinho-sem-fundo.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              backgroundColor: "#FADD3F",
              "&:hover": {
                backgroundColor: "#E1C739",
              },
            }}
          >
            Login
          </Button>
        </CardActions>
      
      </Paper>
      </form>
    </Grid>
  );
}
