import { openDB } from "idb";

const DB_NAME = "ImageGalleryDB";
export const STORE_NAME = "images";

export const getDb = () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
