import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "../useSnackbar";
import axios from "axios";
import { useRouter } from "next/navigation";

export function usePostSignIn(data: any) {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      try {
        const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER_API_URL}/auth`, data);
        return result.data;
      } catch (error) {
        throw error.response || error;
      }
    },
    onSuccess: async () => {
      queryClient.invalidateQueries();
      router.push('/home');
    },
    onError: (error: any) => {
      console.error("Erro na mutação:", error);
      console.error(error?.response?.status);

      if (error?.response?.status === 404) {
        console.error("Resposta do erro:", error?.response);
        showSnackbar({
          title: "Usuário ou senha incorreto.",
          type: "error",
          time: 6000,
        });
      } else {
        showSnackbar({
          title: "Usuário não cadastrado",
          type: "info",
          time: 6000,
        });
      }
    },
  });

  return mutation;
}
