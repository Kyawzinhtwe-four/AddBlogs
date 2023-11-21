import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { api } from "../api";
import { initialState, reducer } from "../reducer";
import { ActionType } from "../reducer/ActionType";
import { Card, Col, Container, Row } from "react-bootstrap";

const BlogDetail = () => {
  const { blogId } = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);

  const selectedBlog = async () => {
    const res = await api.get(`/blogs/${blogId}`);

    dispatch({ type: ActionType.SELECTED_BLOG, payload: res.data });
  };

  useEffect(() => {
    selectedBlog();
  }, [blogId]);

  return (
    <Container
      style={{
        marginTop: 100,
      }}
    >
      <Row>
        <Col md="8" className="mx-auto">
          <Card>
            <Card.Header>{state.blog.title}</Card.Header>
            <Card.Body>{state.blog.description}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
