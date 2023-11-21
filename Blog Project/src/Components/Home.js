import React, { useEffect, useReducer, useState } from "react";
import Blog from "./Blog";
import { Col, Container, Row } from "react-bootstrap";
import { reducer, initialState } from "../reducer";
import { api } from "../api";
import { ActionType } from "../reducer/ActionType";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogs = async () => {
    setIsLoading(true);
    const res = await api.get("/blogs").catch((e) => console.log(e.message));

    dispatch({ type: ActionType.FETCH_BLOGS, payload: res.data });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container
      fluid
      style={{
        marginTop: "100px",
      }}
    >
      <Row>
        {isLoading ? (
          <HashLoader color="#36d7b7" />
        ) : (
          state.blogs.map((blog) => (
            <Col key={blog.id} xs md="6" lg="3" sm="12" className="my-3">
              <Blog blog={blog} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Home;
