export const normalizeBooksData = (payload) => {
  const normalized = {};
  payload.forEach((item) => {
    normalized[item.id] = item;
  });
  return normalized;
};
