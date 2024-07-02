// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => (
  <aside className="bg-teal-800 text-white w-64 min-h-screen p-4">
    <h1 className="text-2xl font-bold mb-6">Dr. Reach</h1>
    <nav>
      {['Dashboard', 'Appointment', 'Patients', 'Reports', 'Booking history', 'Help & Support', 'Setting'].map((item) => (
        <Link key={item} href="#" className="block py-2 hover:bg-teal-700 rounded px-2">
          {item}
        </Link>
      ))}
    </nav>
  </aside>
);

export default Sidebar;