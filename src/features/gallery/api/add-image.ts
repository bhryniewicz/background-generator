import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getDb, STORE_NAME } from "./openDb";
import { toast } from "sonner";

export const addImageToDB = async (id: string, url: string, date: Date) => {
  const db = await getDb();
  await db.put(STORE_NAME, { id, url, date });
};

export const useAddImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newImage: string) => {
      const id = crypto.randomUUID();
      await addImageToDB(id, newImage, new Date());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images"] });
      toast("Image saved in gallery.");
    },
  });
};
