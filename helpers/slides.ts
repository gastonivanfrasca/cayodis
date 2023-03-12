export const separateSlides = (markdown: string) => {
  const slides = markdown.split("%slide");
  return slides;
};

