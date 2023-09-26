import './App.css';
import UsersTable from "./UsersTable";

const usersArray = [
  {
    id: 1,
    name: "John",
    age: 25,
    profileImage: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "Jane",
    age: 24,
    profileImage: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Bob",
    age: 30,
    profileImage: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    profileImage: "https://via.placeholder.com/150/d32776",
  },
];


function App() {
  return (
    <div className="App">
       <table>
        <thead>
          <tr>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Age</h3>
            </th>
            <th>
              <h3>Image</h3>
            </th>
          </tr>
        </thead>
        <UsersTable usersArray={usersArray} />
      </table>
    </div>
  );
}

export default App;
