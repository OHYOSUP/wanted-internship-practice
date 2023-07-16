import { Octokit } from "https://esm.sh/@octokit/core";
import { BASE_URL } from "../baseUrl";
import axios from 'axios'
// const octokit = new Octokit({
//   auth: "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",
// });

// export const getIssues = async () =>
//   await octokit.request(
//     `GET /repos/${BASE_URL.OrganizationName}/${BASE_URL.RepositoryName}/issues`,
//     {
//       headers: {
//         "X-GitHub-Api-Version": "2022-11-28",
//       },
//     }
//   );

// export const getDetailedIssue = async (issueNumber) =>
//   await octokit.request(
//     `GET /repos/${BASE_URL.OrganizationName}/${BASE_URL.RepositoryName}/issues/${issueNumber}`,
//     {
//       // owner: `${BASE_URL.OrganizationName}`,
//       // repo: `${BASE_URL.RepositoryName}`,
//       // issue_number: `${issueNumber}`,
//       headers: {
//         "X-GitHub-Api-Version": "2022-11-28",
//       },
//     }
//   );
const baseURL = `${BASE_URL.github}/repos/${BASE_URL.OrganizationName}/${BASE_URL.RepositoryName}`;

const githubAxios = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer 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`,
  },
});

export const getIssues = async params => {
  const data = await githubAxios.get('/issues', {
    params,
  });

  return data;
};

export const getIssue = async issueNumber => {
  const data = await githubAxios.get(`/issues/${issueNumber}`);

  return data;
};