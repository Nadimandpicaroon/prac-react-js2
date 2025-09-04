import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Posts from "./Posts";
import Team from "./Team";
import Users from "./Users";

function App() {
  function HandleClick() {
    return alert("you click the button");
  }

  function handleSubmit(event) {
    event.preventDefault(); // ডিফল্ট বিহেভিয়ার বন্ধ
    alert("Form submitted!");
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={HandleClick}>Button</button>
      {/* inline eventHandler */}
      <button onClick={() => alert("you click the second button")}>
        Button2
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
