import './style.css';
const StudentCard = (props) => {
    return (
        <div className="student-card">
            <div className="name">{props.name}</div>
            <div className="age">{props.age}</div>
            <div className="math">{props.math}</div>
            <div className="english">{props.english}</div>
        </div>
    )
        
};
export default StudentCard;