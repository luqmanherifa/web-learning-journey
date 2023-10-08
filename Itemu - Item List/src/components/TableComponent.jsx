import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = ({ items, editData, deleteData }) => {
  return (
    <>
      <h4 className="mb-3">Data Table</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>Rp. {item.price}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => editData(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
