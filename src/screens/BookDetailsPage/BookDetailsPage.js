import LoadingIndicator from "components/LoadingIndicator";
import Card from "components/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookInfoById } from "services/getBookInfo";
import { useStore } from "store/Store";
import { header_style, image_container } from "./style";

function BookDetailsPage() {
  const params = useParams();
  const [state] = useStore();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});

  const getBookDetails = async () => {
    setLoading(true);
    const savedBookInfo = state.results[params.id];
    if (!!savedBookInfo) {
      setInfo(savedBookInfo);
      console.log(
        "🚀 ~ file: BookDetailsPage.js ~ line 19 ~ getBookDetails ~ savedBookInfo",
        savedBookInfo
      );
      setLoading(false);
      return;
    }
    const { data } = await getBookInfoById(params.id);
    setInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <div className={header_style}>
        <div className={image_container}>
          <img src={info?.volumeInfo.imageLinks?.thumbnail} alt="book" />
        </div>
        <div style={{ width: "50%" }}>
          <h1>{info?.volumeInfo.title}</h1>
          <span>{info?.volumeInfo.subtitle}</span>
        </div>
      </div>

      <div style={{ marginTop: "5rem" }}>
        <Card>
          <h3>Authors</h3>
          <ol>
            {info.volumeInfo?.authors.map((author) => {
              return <li>{author}</li>;
            })}
          </ol>
        </Card>
      </div>
    </div>
  );
}

export default BookDetailsPage;
