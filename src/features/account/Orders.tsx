

const Orders = () => {
    const data = [
        {
          image: "https://via.placeholder.com/50",
          name: "Product 1",
          price: "#10.00",
          orderDate: "2023-05-30",
          status: "Shipped",
          detailsLink: "#"
        },
        {
          image: "https://via.placeholder.com/50",
          name: "Product 2",
          price: "#20.00",
          orderDate: "2023-06-01",
          status: "Pending",
          detailsLink: "#"
        },
        // Add more products as needed
      ];

  return (
    <div className="container mx-auto p-6">
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">View Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">
                <img src={item.image} alt="Product" className="w-10 h-10 rounded-full" />
              </td>
              <td className="py-2 px-4 border-b border-gray-200">{item.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.price}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.orderDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.status}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <a href={item.detailsLink} className="text-indigo-600 hover:text-indigo-900">View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Orders;
