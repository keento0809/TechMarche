import { useQueryClient } from "@tanstack/react-query";
import { CartProduct } from "@/src/types/products";
import { getLocalStorage } from "@/src/lib/localStorage";
import { localStorageKeys } from "@/src/constants/localStorageKeys/localStorageKeys";

export const useCart = () => {
  const userId = getLocalStorage(localStorageKeys.USER_ID);
  const queryClient = useQueryClient();

  const cartData = queryClient.getQueryData<Array<CartProduct>>([
    "cart",
    userId,
  ]);

  return {
    cartData,
  };
};
