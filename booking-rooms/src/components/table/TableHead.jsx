import React from "react";

const TableHead = () => {
  return (
    <thead className="bg-gray-200">
      <tr>
        <th className="py-2 px-4 border-b text-left">CABIN</th>
        <th className="py-2 px-4 border-b text-left">GUEST</th>
        <th className="py-2 px-4 border-b text-left">DATE</th>
        <th className="py-2 px-4 border-b text-left">STATUS</th>
        <th className="py-2 px-4 border-b text-left">AMOUNT</th>
        <th className="py-2 px-4 border-b text-left"></th>
      </tr>
    </thead>
  );
};

export default TableHead;
