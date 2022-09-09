import "./style.css";
function searchbox(){
    return (
        <div className="searchbox">
            <input type="text" className="search-input" placeholder="Tìm Kiếm" />
            <button type="submit" className="submit-btn">TÌM</button>
            <button type="submit" className="submit-btn">XÓA TRÙNG</button>
            </div>

    )
}
export default searchbox;