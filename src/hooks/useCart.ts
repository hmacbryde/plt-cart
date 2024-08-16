import useSWR from "swr";
import { Cart } from "../types/Cart";

const ENDPOINT =
  "https://my-json-server.typicode.com/kristiancoulsonplt/mock-api/bag";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const useCart = () => {
  const { data, error, isLoading, mutate } = useSWR<Cart>(ENDPOINT, fetcher);

  const handleUpdateItemQty = async (itemId: number, qty: number) => {
    if (qty < 1) {
      return mutate(
        (data) => data?.filter((item) => item.product.id !== itemId),
        false
      );
    }

    return mutate(
      (data) =>
        data?.map((item) => {
          if (item.product.id === itemId) {
            return { ...item, qty };
          }
          return item;
        }),
      false
    );
  };

  return {
    data,
    error,
    isLoading,
    handleUpdateItemQty
  } as const;
};

export default useCart;
