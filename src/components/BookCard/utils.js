export const trimTitle = (title) => {
  if (typeof title !== "string") return "";
  const trimmed = title.substring(0, 20);
  return `${trimmed}${trimmed === title ? "" : ".."}`;
};

export const trimSubTitle = (text) => {
  if (typeof text !== "string") return "";
  const trimmed = text.substring(0, 30);
  return `${trimmed}${trimmed === text ? "" : ".."}`;
};
