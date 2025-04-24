import { useQuery } from "@tanstack/react-query";
import { getDb, STORE_NAME } from "./openDb";

type Image = {
  id: string;
  url: string;
  date: Date;
};

const getAllImages = async () => {
  const db = await getDb();
  const data = await db.getAll(STORE_NAME);
  return data.sort((a, b) => b.date - a.date);
};

export const useImages = () => {
  return useQuery<Image[]>({
    queryKey: ["images"],
    queryFn: async () => {
      if (typeof window !== "undefined") {
        const allImages = await getAllImages();
        return allImages;
      }
      return [];
    },
  });
};
