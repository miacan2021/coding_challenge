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
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_ENDPOINT = "https://66f44b0177b5e88970990f5f.mockapi.io/users";

type User = {
  id: string;
  createdAt: string; // This is an ISO string eg. "2023-01-01T00:00:00.000Z"
  name: string;
  avatar: string; // This is a URL to an image
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(API_ENDPOINT);
        const sortedUsers = response.data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setUsers(sortedUsers);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading now...</p>;
  if (error) return <p>Sorry, We got an error. {error}</p>;

  return (
    <div>
      <ul className="decoration-none">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center pb-10">
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">
                {user.name}
              </h4>
              <p className="text-sm pt-2">
                {new Date(user.createdAt).toLocaleString()}
              </p>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
