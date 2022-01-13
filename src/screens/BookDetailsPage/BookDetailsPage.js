import LoadingIndicator from "components/LoadingIndicator";
import Card from "components/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookInfoById } from "services/getBookInfo";
import { header_style, image_container } from "./style";
import Capsule from "components/Capsule";
import SearchInput from "components/SearchBookInput";

function BookDetailsPage() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});

  const getBookDetails = async () => {
    setLoading(true);
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

  const { volumeInfo, saleInfo } = info;
  const { listPrice } = saleInfo;
  const {
    imageLinks,
    title,
    subtitle,
    authors,
    publisher,
    averageRating,
    publishedDate,
  } = volumeInfo;

  return (
    <div>
      <div className={header_style}>
        <SearchInput onBookPage />
        <div className={image_container}>
          <img
            style={{ backgroundSize: "cover", width: "100%" }}
            src={imageLinks?.thumbnail}
            alt="book"
          />
        </div>
        <div style={{ width: "50%" }}>
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>
      </div>

      <div
        style={{ marginTop: "5rem", marginLeft: "2rem", marginRight: "2rem" }}
      >
        <div className="flex wrap">
          {listPrice && (
            <Card withLeftBorder>
              <h3>Price</h3>
              <p>
                {listPrice?.amount} {listPrice?.currencyCode}
              </p>
            </Card>
          )}

          {authors?.length > 0 && (
            <Card withLeftBorder>
              <h3>Authors</h3>
              <ol>
                {authors?.map((author) => {
                  return <li key={author}>{author}</li>;
                })}
              </ol>
            </Card>
          )}
          {publisher?.length > 0 && (
            <Card withLeftBorder>
              <h3>Publisher</h3>
              <p>{publisher}</p>
            </Card>
          )}

          {!!averageRating && (
            <Card withLeftBorder>
              <h3>Rating</h3>
              <p>{averageRating}</p>
            </Card>
          )}

          <Card withLeftBorder>
            <h3>Published Date</h3>
            <p>{publishedDate}</p>
          </Card>
        </div>

        {info.volumeInfo?.description?.length > 0 && (
          <Card withLeftBorder>
            <h3>Description</h3>
            <p
              dangerouslySetInnerHTML={{ __html: info.volumeInfo?.description }}
              style={{ wordBreak: "break-word" }}
            />
          </Card>
        )}

        {info.volumeInfo?.categories?.length > 0 && (
          <Card withLeftBorder>
            <h3>Categories</h3>
            <div className="flex wrap">
              {info.volumeInfo?.categories?.map((category) => {
                return <Capsule key={category} text={category} />;
              })}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default BookDetailsPage;
