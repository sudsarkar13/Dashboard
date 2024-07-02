// pages/index.tsx
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UpcomingAppointments from '../components/UpcomingAppointments';
import Messages from '../components/Messages';

export default function Home() {
  return (
    <div className="flex min-h-screen text-black bg-gray-100">
      <Head>
        <title>Dr. Reach Dashboard</title>
      </Head>
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <UpcomingAppointments />
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Medical Reports</h3>
              {/* Add medical reports content here */}
            </div>
          </div>
          <div className="mt-6">
            <Messages />
          </div>
        </div>
      </main>
    </div>
  );
}