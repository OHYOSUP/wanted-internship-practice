import { useContext } from "react";
import { IssuesContext } from "../context/issues";
import { getIssues } from "../api/github";

const useIssues = () => {
  const { issues, setIssues } = useContext(IssuesContext);



};
