import { customersData} from "../../data/customers";


function CustomerList() {
  return (
    <div className="bg-white shadow-md overflow-hidden max-w-lg mx-auto">
    <div className="py-4 px-4">
      <h2 className="text-2xl font-extrabold text-gray-800">Customers List</h2>
    </div>
    <ul>
      {customersData.map((customer) => (
        <li key={customer.id} className="flex items-center py-2 px-4">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={customer.avatar}
            alt={`${customer.name}'s avatar`}
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">{customer.name}</h3>
            <p className="text-gray-500 text-base">{customer.email}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default CustomerList
