import { Alert, Snackbar } from "@mui/material";
import { ReactNode, createContext, useState } from "react";
import {
  SnackbarConfig,
  SnackbarContextData,
  SnackbarProviderProps,
} from "./types";

export const SnackbarContext = createContext<SnackbarContextData>(
  {} as SnackbarContextData
);

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [snackbarConfig, setSnackbarConfig] = useState<SnackbarConfig>(
    {} as SnackbarConfig
  );

  function openDialog({
    title = "Salvo com sucesso",
    type = "success",
    sx = {},
    actionCallback,
    time = 3000,
  }: SnackbarConfig) {
    setSnackbarConfig({
      time,
      title,
      type,
      sx,
      actionCallback,
    });
    setIsOpen(true);
  }

  function resetDialog() {
    setIsOpen(false);
    setSnackbarConfig({} as SnackbarConfig);
  }

  function onConfirm() {
    setIsOpen(false);
    snackbarConfig.actionCallback(true);
  }

  function onDismiss() {
    snackbarConfig.actionCallback && snackbarConfig.actionCallback(false);
    resetDialog();
  }

  function onClose() {
    setIsOpen(false);
    snackbarConfig.actionCallback(true);
  }

  return (
    <SnackbarContext.Provider value={{ openDialog }}>
      {children}
      <Snackbar
        open={isOpen}
        autoHideDuration={snackbarConfig.time}
        onClose={() => onClose()}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert severity={snackbarConfig.type} sx={{ width: "100%" }}>
          {snackbarConfig.title}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
