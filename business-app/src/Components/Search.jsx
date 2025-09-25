const Search = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="mt-5 ml-[2.75rem] block w-[66.5rem] rounded-full border border-gray-300 bg-gray-50 p-2.5 py-3 ps-5 text-base text-gray-900"
          placeholder="Search business..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Search;
