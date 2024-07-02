// components/Messages.tsx
const Messages = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Messages</h3>
      <button className="text-orange-400">CHAT +</button>
    </div>
    <div className="flex">
      <div className="w-1/3 border-r">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="flex items-center p-2 hover:bg-gray-100">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
            <div>
              <p className="font-semibold">Suporte ADMIN</p>
              <p className="text-sm text-gray-500">Pesquisar chat</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/3 p-4">
        {/* Chat messages would go here */}
        <div className="mt-4">
          <input type="text" placeholder="Type your Message" className="w-full border p-2 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default Messages;