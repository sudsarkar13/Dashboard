// components/UpcomingAppointments.tsx
const UpcomingAppointments = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
    <table className="w-full">
      <thead>
        <tr className="text-left">
          <th>Name</th>
          <th>Sex</th>
          <th>Date</th>
          <th>Time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4].map((_, index) => (
          <tr key={index}>
            <td>Rohit Kumar</td>
            <td>M</td>
            <td>18/06/2024</td>
            <td>9:45 - 10:30 am</td>
            <td><button className="bg-orange-400 text-white px-2 py-1 rounded">Details</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UpcomingAppointments;