import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

function ExerciseNewForm() {
  let navigate = useNavigate();
  const addExercise = (newExercise) => {
    axios
      .post(`${API}/exercises`, newExercise)
      .then(
        () => {
          navigate(`/exercises`);
        },
        (error) => console.log(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [exercise, setExercise] = useState({
    name: "",
    type: "",
    muscle: "",
    equipment: "",
    difficulty: "",
    instructions: "",
  });

  const handleTextChange = (event) => {
    setExercise({ ...exercise, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addExercise(exercise);
  };

  return (
    <div className="New">
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center" xs={6} md={4}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Label htmlFor="name" column="lg" lg={2} className="mb-3">
                Name:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="name"
                  value={exercise.name}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the exercise name..."
                  required
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label htmlFor="type" column="lg" lg={2} className="mb-3">
                Type:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="type"
                  value={exercise.type}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the type..."
                  required
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label htmlFor="muscle" column="lg" lg={2} className="mb-3">
                Muscle:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="muscle"
                  value={exercise.muscle}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the muscle..."
                  required
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label
                htmlFor="equipment"
                column="lg"
                lg={2}
                className="mb-3"
              >
                Equipment:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="equipment"
                  value={exercise.equipment}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the equipment..."
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label
                htmlFor="difficulty"
                column="lg"
                lg={2}
                className="mb-3"
              >
                Difficulty:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="difficulty"
                  value={exercise.difficulty}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the difficulty value..."
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label
                htmlFor="instructions"
                column="lg"
                lg={2}
                className="mb-3"
              >
                Instructions:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="instructions"
                  value={exercise.instructions}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the instructions..."
                />
              </Col>
            </Row>
            <br />
            <div className="form-button mt-3">
              <Button
                id="submit"
                variant="secondary"
                type="submit"
                className="col-3 mx-auto d-grid"
                // className="btn btn-primary"
              >
                Add Exercise
              </Button>{" "}
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default ExerciseNewForm;
