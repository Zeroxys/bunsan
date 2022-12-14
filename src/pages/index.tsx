import * as React from "react";
import { TreeComponent } from "../components/Form";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return <main style={pageStyles}>
    <TreeComponent />  
  </main>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
