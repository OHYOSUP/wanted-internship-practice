import React from "react";
import { useEffect, useState } from "react";
import { Octokit } from "https://esm.sh/@octokit/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BASE_URL } from "../baseUrl";
function Issue() {
  const [issue, setIssue] = useState([]);

  const octokit = new Octokit({
    auth: "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",
  });

  useEffect(() => {
    (async () =>
      await octokit
        .request(
          `GET /repos/${BASE_URL.OrganizationName}/${BASE_URL.RepositoryName}/issues`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        )
        .then((res) => {
          
          const openIssue = res.data.filter((issue) => issue.state === "open");
          setIssue(openIssue);        
        }))();
  }, []);

  return (
    <UlWrapper>
      {issue
        .sort((a, b) => b.comments - a.comments)
        .map((issue) => (
          <LinkWrapper key={issue.id} to={`/detail/${issue.id}`}>
            <IssueWrapper>
              <IssueSummary>
                <div>
                  <strong>#{issue.number} </strong>
                  <strong>{issue.title}</strong>
                </div>
                <div>
                  <span>작성자: {issue.user.login}</span>
                  <span>
                    작성일:{" "}
                    {`${issue.updated_at.split("-")[0]}년${
                      issue.updated_at.split("-")[1]
                    }월${issue.updated_at.split("-")[2].slice(0, 2)}일`}
                  </span>
                </div>
              </IssueSummary>
              <IssueComments>
                <p>코멘트: {issue.comments}</p>
              </IssueComments>
            </IssueWrapper>
          </LinkWrapper>
        ))}
    </UlWrapper>
  );
}
const UlWrapper = styled.ul`
  max-width: 50vw;
`;
const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #000;
`;
const IssueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  max-width: 70vw;
`;
const IssueSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  div {
    margin-bottom: 15px;
  }
`;
const IssueComments = styled.div`
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Issue;
