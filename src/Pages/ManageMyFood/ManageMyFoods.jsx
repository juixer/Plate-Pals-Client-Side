import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useTable } from "react-table";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/myFood/${user.email}`)
      .then((res) => setFoods(res.data));
  }, [user.email]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "food_name",
      },
      {
        Header: "Action",
        accessor: "Action",
        Cell: ({ row }) => (
          <div className="p-2 space-x-2">
            <Link to={`/update/${row.original._id}`}>
              <button className=" bg-emerald-300 px-3 font-semibold py-2 rounded-lg">
                Edit
              </button>
            </Link>

            <button
              className="bg-red-500 text-white font-semibold px-3 py-2 rounded-lg"
              onClick={() => handleDelete(row.original)}
            >
              Delete
            </button>
          </div>
        ),
      },

      {
        Header: "Manage",
        accessor: "manage",
        Cell: ({ row }) => (
          <Link to={`/manage/${row.original._id}`}>
            <button className=" bg-sky-400 mx-3 font-semibold px-3 py-2 rounded-lg">
              Manage
            </button>
          </Link>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: foods,
    });

  const handleDelete = (rowData) => {
    // Handle delete action for the selected row
    console.log("Delete clicked for row:", rowData);
  };

  return (
    <div className="my-10 space-y-5 lg:mb-36">
      <h1 className="text-center text-3xl md:text-5xl font-bold">My Foods</h1>

      <div className="max-w-screen-lg mx-auto flex justify-center items-center">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="border-2">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="border-2  font-semibold"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
