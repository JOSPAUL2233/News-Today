import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = ({ cat }) => {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=57520c183d0a4263873127ac43960a1c`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=57520c183d0a4263873127ac43960a1c"
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);
  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINES</u>
        <div
          className="container d-flex justify-content-center align-items-center flex-column my-3"
          style={{ minHeight: "100vh" }}
        >
          {Data
            ? Data.map((items, index) => (
                <>
                  <div
                    className="container my-3"
                    style={{
                      width: "650px",
                      boxShadow: "2px 2px 10px silver",
                      borderRadius: "8px",
                      padding: "15px",
                    }}
                  >
                    <h4>{items.title}</h4>

                    <div className="d-flex justify-content-center align-items-center flex-column my-3">
                      <img
                        src={items.urlToImage}
                        alt="ImageIs Not Found"
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <p className="my-3" style={{ fontSize: "17px" }}>
                      {items.content}
                    </p>
                    <a
                      href={items.url}
                      target="blank"
                      style={{ fontSize: "17px" }}
                    >
                      view more
                    </a>
                  </div>
                </>
              ))
            : "Loading..."}
        </div>
      </h3>
    </div>
  );
};

export default FetchData;
