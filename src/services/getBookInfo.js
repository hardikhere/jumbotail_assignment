export const getBookInfoById = async (query) => {
  try {
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${query}`
    );
    const jsonData = await data.json();
    return {
      data: jsonData,
      success: true,
      error: null,
    };
  } catch (exp) {
    console.error(exp);
    return {
      data: null,
      success: false,
      error: exp,
    };
  }
};
