import StudentCard from "./components/Student/Studentcard";
import "./App.css";
function App() {
  const data = [
    {
      name: "Jane",
      age: 34,
      math: 10,
      english: 9,
    },
    {
      name: "June",
      age: 34,
      math: 10,
      english: 9,
    },
    {
      name: "Jane",
      age: 34,
      math: 10,
      english: 9,
    },
  ];

  return (
    <div className="App">
      <h1>Student</h1>
      {data.map((student) => {
        return (
          <StudentCard
            name={student.name}
            age={student.age}
            math={student.math}
            english={student.english}
          />
        );
      })}
    </div>
  );
}
export default App;
