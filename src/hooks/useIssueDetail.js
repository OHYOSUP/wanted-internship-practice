import { useContext, useEffect, useState } from "react";
import { getDetailedIssue, getIssue } from "../api/github";
import useHttp from "./useHttp";
import { IssueDetailContext } from "../context/issueDetail";



const useIssue = issueNumber => {
  const { issue, setIssue } = useContext(IssueDetailContext);
  const { loading, error, setLoading, setHttpError } = useHttp();

  const getIssueDetail = async () => {
    try {
      setLoading(true);
      const { data } = await getIssue(issueNumber);
      setIssue(data);
    } catch (e) {
      setHttpError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getIssueDetail();
  }, []);

  return { issue, loading, error, getIssueDetail };
};

export default useIssue;