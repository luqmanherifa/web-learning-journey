const Pagination = ({ totalPages, currentPage, setCurrentPage, prevPage }) => {
  return (
    <div className="mt-7 flex justify-center">
      <button
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex cursor-pointer items-center rounded-2xl px-3 py-1 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 w-16 justify-center"
      >
        Prev
      </button>
      <span className="mx-3 text-sm flex items-center w-28 justify-center">
        Page{" "}
        <span className="font-bold mx-1 w-5 flex justify-center">
          {currentPage}
        </span>{" "}
        of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex cursor-pointer items-center rounded-2xl px-3 py-1 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 w-16 justify-center"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
