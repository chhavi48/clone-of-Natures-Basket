import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

export default function productdetail() {
  const [data, setData] = useState(data);
  var { name } = useParams();
  return (
    <div>
      <div className="produ">
        <h1>{name}</h1>
      </div>
    </div>
  );
}
