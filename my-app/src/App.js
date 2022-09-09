import logo from './logo.svg';
import './App.css';
import addbox from './components/addbox';
import searchbox from './components/search_box';
import contactbox from './components/contact_box';

function App() {
  return (
    <div className="App">
      <addbox />
      <searchbox />
      <contactbox />
      <contactbox />
      <contactbox />
      <contactbox />
    </div>
  );
}

export default App;
