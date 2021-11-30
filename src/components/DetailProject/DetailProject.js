import React from "react";
import { useParams } from "react-router";

export default function DetailProject() {
  const { id } = useParams();
  console.log(id);
  return <div>This is detailsid{id}</div>;
}
