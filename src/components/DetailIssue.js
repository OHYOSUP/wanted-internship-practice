import React from "react";
import useIssue from "../hooks/useIssueDetail";
import { useParams } from "react-router";


function DetailIssue() {
  const { id: issueNumber } = useParams();  
  const data = useIssue(issueNumber);
  
  return <>details</>;
}

export default DetailIssue;
