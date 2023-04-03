import './App.css';
import Form from "./components/Form";


function App() {
  return (
      <div className="container grid grid-cols-3 gap-8 place-content-center mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <div></div>
          <Form />
          <div></div>
      </div>

  );
}

export default App;