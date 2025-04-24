"use client";

import { ContentLayout } from "@/components/layouts/content-layout";
import { ImageGenerator } from "@/features/generate/components/image-generator";

export const Generate = () => {
  return (
    <ContentLayout>
      <ImageGenerator />
    </ContentLayout>
  );
};
