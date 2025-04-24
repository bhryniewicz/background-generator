import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getDb, STORE_NAME } from "./openDb";
import { toast } from "sonner";

export const deleteImage = async (id: string) => {
  const db = await getDb();
  await db.delete(STORE_NAME, id);
};

export const useDeleteImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await deleteImage(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images"] });
      toast.success("Image deleted from gallery");
    },
  });
};
