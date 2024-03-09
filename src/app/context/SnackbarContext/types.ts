import { SxProps } from "@mui/material";
import React, { ReactNode } from "react";

export interface SnackbarContextData {
  openDialog: (props: SnackbarConfig) => void;
}

export interface SnackbarConfig {
  title?: string | Array<string | React.ReactElement>;
  text?: string;
  type?: "success" | "warning" | "info" | "error";
  sx?: SxProps;
  time?: number;
  actionCallback: (hasBeenConfirmed: boolean) => void;
}

export interface SnackbarProviderProps {
  children: ReactNode;
}
