import React from "react";

const Contest = () => {
  const contests = [
    {
      startTime: "2024-07-15 10:00:00",
      endTime: "2024-07-15 12:00:00",
      link: "https://example.com/contest1",
      platform: "CodeChef",
      date: "2024-07-15",
    },
    {
      startTime: "2024-07-20 14:00:00",
      endTime: "2024-07-20 16:00:00",
      link: "https://example.com/contest2",
      platform: "CodeForces",
      date: "2024-07-20",
    },
    // Add more contest entries as needed
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Upcoming Contests
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Link
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Platform
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contests.map((contest, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contest.startTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contest.endTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={contest.link}
                    className="text-indigo-600 hover:text-indigo-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contest Link
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contest.platform}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{contest.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contest;
