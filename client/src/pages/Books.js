import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import Layout from "./Layout";
import axios from "axios";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const { data } = await axios("http://localhost:8000/api/v1/getbooks");
    // console.log(data.data)
    setBooks(data.data);
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Layout>
      <div className="container mt-5">
        {/* <div className="w-100  d-flex justify-content-end">
            <Link to="/addbook">
          <a
            className="btn btn-primary btn-lg m-2"
            >
            Add Book
          </a>
          </Link>
        </div> */}
        <div className="row">
          {books.map((book) => {
            return (
              <div className="col-md-3 mt-3" key={book._id}>
                <Book data={book} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Books;
