
import { useContext } from "react";
import { SnackbarContext } from "../context/SnackbarContext/SnackbarContext";
import { SnackbarConfig } from "../context/SnackbarContext/types";

interface IHandleFunctions {
  onSuccess: () => void;
  onError?: () => void;
}

export function useSnackbar() {
  const { openDialog } = useContext(SnackbarContext);

  async function showSnackbar({
    ...options
  }: Omit<SnackbarConfig, "actionCallback">): Promise<void> {
    await new Promise((res) => {
      openDialog({ actionCallback: res, ...options });
    });
  }

  return { showSnackbar };
}
