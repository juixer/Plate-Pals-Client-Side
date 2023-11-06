import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import updateAni from "../../../public/update.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageMyFoods = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/api/myFood?email=${user.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => setFoods(res.data));
  }, [url, axiosSecure]);

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
          <div className="p-2 space-x-2 space-y-2">
            <Link to={`/update/${row.original._id}`}>
              <button className="shadow-xl hover:bg-emerald-500  bg-emerald-300 px-3 font-semibold py-2 rounded-lg">
                Update
              </button>
            </Link>

            <button
              className="shadow-xl hover:bg-amber-800 bg-red-500 text-white font-semibold px-3 py-2 rounded-lg"
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
            <button className=" shadow-xl hover:bg-sky-600 bg-sky-400 mx-3 font-semibold px-3 py-2 rounded-lg">
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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://platepals.vercel.app/api/myFood/${rowData._id}`)
          .then(() => {});

        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  return (
    <motion.div
      className="my-10 lg:mb-36"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Helmet>
        <title>PlatePals | Manage Food</title>
      </Helmet>
      {foods.length === 0 ? (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
            No food items have been donated yet
          </h1>
          <Lottie animationData={updateAni} loop={true} />
        </div>
      ) : (
        <div className="space-y-5">
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            My Donations
          </h1>

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
                            className="border-2  font-semibold text-center md:text-xl md:px-5 md:py-2"
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
      )}
    </motion.div>
  );
};

export default ManageMyFoods;
