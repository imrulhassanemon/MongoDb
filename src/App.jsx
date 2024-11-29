import { Link } from "react-router-dom";
import "./App.css";
import toast from "react-hot-toast";

function App() {
  const handelAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset()
        console.log(data);
        if(data.insertedId){
          toast.success('Users added Successfully')
        }
      });
  };

  return (
    <>
      <h1>Simple Curd</h1>
      <form onSubmit={handelAddUser}>
        <input type="text" className="border border-gray-700 rounded-sm pl-1" placeholder="Enter Name" name="name" id="" />
        <br />
        <input className="border border-gray-700 mt-2 pl-1 rounded-sm" placeholder="Enter Email" type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <Link to={'/users'}>See User</Link>
    </>
  );
}

export default App;
