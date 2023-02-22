import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

function ExerciseEditForm() {
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/exercises/${id}`)
      .then((response) => {
        setExercise(response.data);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const [exercise, setExercise] = useState({
    name: "",
    type: "",
    muscle: "",
    equipment: "",
    difficulty: "",
    instructions: "",
  });

  const navigate = useNavigate();

  console.log(exercise);

  const handleTextChange = (event) => {
    setExercise({ ...exercise, [event.target.id]: event.target.value });
  };

  const updateExercise = () => {
    axios
      .put(`${API}/exercises/${id}`, exercise)
      .then((response) => {
        navigate(`/exercises/${id}`);
      })
      .catch((e) => console.error("catch", e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateExercise();
  };

  return (
    <div className="Edit">
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
            <div className="form-button mt-3 mx-auto">
              <Row className="col mx-auto">
                <Col>
                  <Button
                    id="submit"
                    variant="secondary"
                    type="submit"
                    className="mx-auto"
                  >
                    Make Changes
                  </Button>{" "}
                </Col>
                <Col>
                  <Link to={`/snacks/${id}`}>
                    <Button variant="danger" className="mx-auto">
                      Nevermind!
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default ExerciseEditForm;