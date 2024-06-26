"use client";

import { useState } from "react";

export const ClientComp = ({ data }: { data: any }) => {
  const [state, setState] = useState(data);

  function handleAddData(){
    setState([...state, {id: Math.random(), title: "New Date"}])
  }
  return (
    <main>
      <button className="bg-indigo-600 text-white ">Add Data</button>
      <div>
        {data.map((item: any) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </main>
  );
};
