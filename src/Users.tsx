/**
 * Instructions:
 * Your task is to create a React component that displays a sorted list of users.
 * This component fetches user data from the API and displays the result.
 * The API endpoint is provided as `API_ENDPOINT` and returns an array of 5 users. 
 * The User type describes the shape of a single user.
 *
 * Acceptance Criteria:
 * - users are sorted by their `createdAt` property in descending order
 * - show each user's name, creation date and avatar image
 *
 * Notes:
 * Don't worry about styling or complicated layouts. Any clear and readable presentation is acceptable.
 * This is a Typescript project but feel free to use vanilla JavaScript.
 * Include any added dependencies in `package.json` file.
 * The estimated time to complete this challenge is 30 minutes.
 *
 */

const API_ENDPOINT = "https://66f44b0177b5e88970990f5f.mockapi.io/users";

type User = {
  id: string;
  createdAt: string; // This is an ISO string eg. "2023-01-01T00:00:00.000Z"
  name: string;
  avatar: string; // This is a URL to an image
};

