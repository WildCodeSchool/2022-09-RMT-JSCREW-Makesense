import React from "react";

function Search({ search, handleSearch }) {
  return (
    <form className="px-12 pt-8 flex justify-end">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-[#3d6169] left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          placeholder="Rechercher"
          aria-label="Search"
          className="dark:bg-[#e7ebec] w-80 py-3 pl-12 pr-4 text-[#3d6169] border border-[#b6c4c7] rounded-md outline-none bg-[#f5f7f7] focus:bg-white focus:border-[#e7ebec]"
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
