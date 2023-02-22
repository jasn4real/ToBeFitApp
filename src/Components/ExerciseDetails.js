import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

// import Hollow from "../assets/heart-regular.png";
// import Solid from "../assets/heart-solid.png";

function ExerciseDetails() {
  const [exercise, setExercise] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  console.log(exercise);

  useEffect(() => {
    axios
      .get(`${API}/exercises/${id}`)
      .then((response) => {
        setExercise(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/404");
      });
  }, [id, navigate, API]);

  const deleteExercise = () => {
    axios
      .delete(`${API}/exercises/${id}`)
      .then(() => {
        navigate(`/exercises`);
      })
      .catch((err) => console.error("catch", err));
  };

  const handleDelete = () => {
    deleteExercise();
  };

  return (
    <div className="homePage">
      <h1>{exercise.name}</h1>

      <div
        className="cardContact"
        style={{ background: "white", boxShadow: "1px 2px 9px #999999" }}
      >
        <p>
          <strong>Name:</strong> {exercise.name}
        </p>
        <p>
          <strong>Type:</strong> {exercise.type}
        </p>
        <p>
          <strong>Muscle:</strong> {exercise.muscle}
        </p>
        <p>
          <strong>Equipment:</strong> {exercise.equipment}
        </p>
        <p>
          <strong>Difficulty:</strong> {exercise.difficulty}
        </p>
        <p>
          <strong>Instructions:</strong> {exercise.instructions}
        </p>

        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/exercises`}>
              <Button
                style={{ width: "100px", marginBottom: "5px" }}
                variant="secondary"
              >
                Back
              </Button>
            </Link>
          </div>
          <div>
            <Link to={`/exercises/${id}/edit`}>
              <Button
                style={{ width: "100px", marginBottom: "5px" }}
                variant="secondary"
              >
                Edit
              </Button>
            </Link>
          </div>
          <div>
            <Button
              style={{ width: "100px", marginBottom: "5px" }}
              variant="secondary"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetails;
