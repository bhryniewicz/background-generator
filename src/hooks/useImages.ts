import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { openDB } from "idb";

const DB_NAME = "ImageGalleryDB";
const STORE_NAME = "images";

export const getDb = () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });

export const addImageToDB = async (id: string, url: string, date: Date) => {
  const db = await getDb();
  await db.put(STORE_NAME, { id, url, date });
};

export const getAllImagesFromDB = async () => {
  const db = await getDb();
  const data = await db.getAll(STORE_NAME);
  return data.sort((a, b) => b.date - a.date);
};

export const deleteImage = async (id: string) => {
  const db = await getDb();
  await db.delete(STORE_NAME, id);
};

type Image = {
  id: string;
  url: string;
  date: Date;
};

export const useImages = () => {
  const {
    isLoading,
    data = [],
    refetch,
  } = useQuery<Image[]>({
    queryKey: ["images"],
    queryFn: async () => {
      if (typeof window !== "undefined") {
        const allImages = await getAllImagesFromDB();
        return allImages;
      }
      return [];
    },
  });

  const { mutate: addImageMutation } = useMutation({
    mutationFn: async (newImage: string) => {
      const id = crypto.randomUUID();
      await addImageToDB(id, newImage, new Date());
    },
    onSuccess: () => {
      refetch();
      toast("Image saved in gallery.");
    },
  });

  const { mutate: deleteImageMutation } = useMutation({
    mutationFn: async (id: string) => {
      await deleteImage(id);
    },
    onSuccess: () => {
      refetch();
      toast("Image deleted from gallery");
    },
  });

  return { isLoading, data, addImageMutation, deleteImageMutation };
};
