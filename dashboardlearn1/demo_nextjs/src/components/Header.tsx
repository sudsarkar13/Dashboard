// components/Header.tsx
const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center">
    <h2 className="text-xl">Good Morning, Dr. Rahul</h2>
    <div className="flex items-center">
      <span className="mr-2">Dr. Rahul Kumar</span>
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    </div>
  </header>
);

export default Header;