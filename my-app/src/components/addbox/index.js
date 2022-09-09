import "./style.css";
function addbox() {
  return (
    <div className="addbox">
      <input type="text" className="namebox-input" placeholder="Name" />
      <input type="text" className="phonebox-input" placeholder="Điện Thoại" />
      <button type="submit" className="submit-btn">
        Thêm
      </button>
    </div>
  );
}
export default addbox;
