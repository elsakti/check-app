import "./App.css";

const listItem = [
  { id: 1, name: "Makan", done: false },
  { id: 2, name: "Tidur", done: true },
];

function Logo() {
  return <span className="logo"> My Check-App </span>;
}

function Form() {
  return (
    <>
      <div className="add-form">
        <h3>Tambahkan Catatan</h3>
      </div>
    </>
  );
}

function CheckList() {
  return (
    <>
      <div className="list">
        <ul>
          {listItem.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Stats() {
  return (
    <>
      <footer className="stats">
        <span>Kamu punya x catatan dan baru x yang diselesaikan (x%)</span>
      </footer>
    </>
  );
}

function Item({ item }) {
  return (
    <li key={item.id}>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.name}
      </span>
      <button>X</button>
    </li>
  );
}

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

export default App;
