import React, { useState } from "react";
import Layout from "./Layout";

const Addbook = () => {
  const [showChapterForm, setshowChapterForm] = useState(false);
  // const [chapterCount, setChapterCount] = useState([1]);
  const [values , setValues] = useState({
    name:"",
    author:"",
    description:"",
    
  })

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputname" className="form-label">
                  Book Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputauthor" className="form-label">
                  Author Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputauthor"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Cover Image
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className="text-center">
              <button type="button" onClick={()=>setshowChapterForm(!showChapterForm)} className="btn btn-secondary mb-3 ">
                add chapters +
              </button>
              </div>
              
              {/* showchapter form  */}
              {showChapterForm && (
                <div className="container border p-2">
                  <h3 className="text-center">Chapters</h3>
                 
                  <form>

                  <div className="mb-3">
                      <label
                        htmlFor="exampleInputchapterno"
                        className="form-label"
                      >
                         Chapter No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputchapterno"
                    
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputchapter"
                        className="form-label"
                      >
                         Chapter Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputchapter"
                    
                      />
                    </div>
                  
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1Chapter"
                        className="form-label"
                      >
                        Chapter Content
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1Chapter"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </form>
                  
                </div>
              )}
              {/* end showchapter form  */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Addbook;
