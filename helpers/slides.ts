export const separateSlidesAndSaveInLocalStorage = (markdown: string) => {
  const slides = markdown.split("%slide");
  localStorage.setItem("slides", JSON.stringify(slides));
  return slides[0];
};

export const separateSlides = (markdown: string) => {
  const slides = markdown.split("%slide");
  return slides;
};

export const separateMetadata = (markdown: string) => {
  const metadata = markdown.split("%tutorialMetadata");
  return metadata[1];
};

