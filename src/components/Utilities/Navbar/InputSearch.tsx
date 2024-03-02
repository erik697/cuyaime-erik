"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event: any) => {
    if (event.key === "Enter" || event.type === "click") {
      if (
        searchRef.current.value != "" &&
        searchRef.current.value.trim() != ""
      ) {
        event.preventDefault();
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`);
      } else {
        alert("Form tidak boleh kosong");
      }
    }
    // event.preventDefault();
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari anime ..."
        className="p-2 rounded w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
