import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddStudent = ({ show, handleClose, addStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    addStudent({
      firstName,
      lastName,
      phone,
    });

    setFirstName("");
    setLastName("");
    setPhone("");

    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastName">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStudent;

// import React, { useState } from "react";
// import { Button, Form, Table } from "react-bootstrap";

// const AddIformation = () => {
//   const [name, setName] = useState({
//     firstname: "",
//     lastname: "",
//     phone: 0,
//   });

//   const handleChange = (e) => {
//     setName({
//       ...name,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name);
//     localStorage.setItem("firstname", JSON.stringify(name.firstname));
//     localStorage.setItem("lastname", JSON.stringify(name.lastname));
//     localStorage.setItem("phone", JSON.stringify(name.phone));
//   };

//   const firstname = JSON.parse(localStorage.getItem("firstname"));
//   const lastname = JSON.parse(localStorage.getItem("lastname"));
//   const phone = JSON.parse(localStorage.getItem("phone"));

//   return (
//     <div className="d-flex m-4 gap-4">
//       <Form className="form-control w-50" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Firstname"
//           className="form-control mt-4"
//           name="firstname"
//           id="firstname"
//           value={name.firstname}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Lastname"
//           className="form-control mt-4"
//           name="lastname"
//           id="lastname"
//           value={name.lastname}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           placeholder="Your Number"
//           className="form-control mt-4"
//           name="phone"
//           id="phone"
//           value={name.phone}
//           onChange={handleChange}
//         />
//         <Button type="submit" className="btn btn-primary mt-4 w-100">
//           Submit
//         </Button>
//       </Form>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>FirstName</th>
//             <th>LastName</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {name.map((nm, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>Firstname: {firstname}</td>
//               <td>Lastname: {lastname}</td>
//               <td>Phone: {phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default AddIformation;
