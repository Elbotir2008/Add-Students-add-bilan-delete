import React, { useState } from "react";
import AddStudent from "./AddIformation";
import StudentList from "./Main";

const Students = () => {
  const [person, setPerson] = useState(
    JSON.parse(localStorage.getItem("student")) || []
  );
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const addStudent = (newPerson) => {
    let newStudent = [
      ...person,
      {
        id: Math.floor(Math.random() * 100000),
        ...newPerson,
      },
    ];

    localStorage.setItem("student", JSON.stringify(newStudent));
    setPerson(JSON.parse(localStorage.getItem("student")));
  };

  const deleteStudent = (id) => {
    let newStudent = person.filter((el) => el.id !== id);
    localStorage.setItem("student", JSON.stringify(newStudent));
    setPerson(JSON.parse(localStorage.getItem("student")));
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="container d-flex justify-content-center flex-column">
      <div className="mt-3 d-flex flex-sm-column">
        <form className="">
          <input
            type="text"
            className="w-50"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <button className="w-50" onClick={handleShow}>
          Add Contact
        </button>
      </div>
      <AddStudent
        show={show}
        handleClose={handleClose}
        person={person}
        addStudent={addStudent}
      />
      <StudentList
        show={show}
        handleClose={handleClose}
        person={person}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default Students;
