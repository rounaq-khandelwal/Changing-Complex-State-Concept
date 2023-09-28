import React, { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function FirstName(event) {
  //   setFirstName(event.target.value);
  // }
  // function LastName(event) {
  //   setLastName(event.target.value);
  // }
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function updateName(event) {
    const { value, name } = event.target;
    setFullName((prevState) => {
      if (name === "firstName") {
        return {
          fName: value,
          lName: prevState.lName
        };
      } else {
        return {
          fName: prevState.fName,
          lName: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        {/* Hello {firstName} {lastName} */}
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        {/* <input
          onChange={FirstName}
          name="fName"
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={LastName}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        /> */}
        <input
          onChange={updateName}
          name="firstName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={updateName}
          name="lastName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
