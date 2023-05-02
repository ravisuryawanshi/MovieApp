import { useState } from "react";

const Header = ({ setMovieName, setSortParam }) => {
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="flex pl-5 bg-slate-100">
      <div className="pt-2 pb-2">
        <select
          data-testid="sortBy"
          id="sortBy"
          value={sortBy}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => {
            setSortBy(e.target.value);
            setSortParam(e.target.value);
          }}
        >
          <option value="">Sort By</option>
          <option value="id">Episode-Id</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div className="pl-5 pt-4 ">
        <input
          className="border-2 w-96 border-gray-500 rounded-lg "
          type="text"
          data-testid="select-option"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setMovieName(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
