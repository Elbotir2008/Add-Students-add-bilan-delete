import React from "react";

const StudentList = ({ person, deleteStudent }) => {
  return (
    <div>
      <table className="table d-flex gap-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>LastName</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {person.length > 0 &&
            person.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td className="d-flex gap-3 d-flex justify-content-center">
                  <button className="btn btn-success">Edit</button>
                  <button
                    className="btn btn-danger text-center"
                    onClick={() => deleteStudent(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
