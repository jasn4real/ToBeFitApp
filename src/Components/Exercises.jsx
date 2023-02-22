import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

// import solid from "../assets/heart-solid.png";
// import hollow from "../assets/heart-regular.png";

import "bootstrap/dist/css/bootstrap.min.css";

const API = process.env.REACT_APP_API_URL;

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [currExercises, setCurrExercises] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/exercises`)
      .then((response) => setExercises(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  console.log(exercises);

  let unknown =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjocoUBkinRNqt4-fZE-Y30BdehZeHHH91zUvxlTeNskQB66IcVs0if4gy9RHm-fj9swE&usqp=CAU";

  function handlesubmit(event) {
    event.preventDefault();
    setCurrExercises(
      exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(search.toLowerCase())
          ? exercises
          : exercise.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    console.log(currExercises);
    setSearch("");
  }

  let list = currExercises.length < 1 ? exercises : currExercises;

  return (
    <>
      <Container>
        <Row gap={3}>
          <Col></Col>
          <Col>
            <Form onSubmit={(event) => handlesubmit(event)}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search Exercise by Name or Difficulty"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  required
                />
                <Button type="submit" variant="secondary" id="button-addon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>{" "}
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          {/* <Col style={{ display: "flex", justifyContent: "center" }}> */}
            {list.map((exercise) => {
              let link = "./" + exercise.id;

              return (
                <Col key={exercise.name} sm={5} md={3} lg={1}>
                  <Card
                    style={{
                      width: "18rem",
                      margin: "20px",
                      boxShadow: "1px 2px 9px #999999",
                      padding: 0,
                    }}
                  >
                    <Card.Img
                      variant="top"
                      style={{
                        margin: 0,
                        padding: 0,
                        borderRadius: "30px, 30px, 0px, 0px",
                      }}
                      src={exercise.image || unknown}
                    ></Card.Img>
                    <Card.Body className="d-grid gap-2">
                      <Card.Title>{exercise.name} </Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                    <Link to={link}>
                      <ListGroup variant="flush" className="list-group-mine">
                        <ListGroup.Item action variant="dark">
                          More Info...
                        </ListGroup.Item>
                      </ListGroup>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          {/* </Col> */}
        </Row>
      </Container>
    </>
  );
}
