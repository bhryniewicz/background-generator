import { ContentLayout } from "@/components/layouts/content-layout";
import { GalleryList } from "@/features/gallery/components/gallery-list";

export const Gallery = () => {
  return (
    <ContentLayout>
      <div className="col-span-3">
        <h1 className="text-[#9900FF] text-xl mb-2">GALLERY</h1>
        <p className="text-white text-sm font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ad
          culpa dicta nulla asperiores ipsam voluptatum veritatis sequi
          recusandae excepturi.
        </p>
      </div>
      <GalleryList />
    </ContentLayout>
  );
};
