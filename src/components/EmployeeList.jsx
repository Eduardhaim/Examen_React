export default function EmployeeList({ employees, loading }) {
  if (loading) return <p className="text-center text-gray-500">Cargando empleados...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">📋 Lista de empleados</h2>
      <table className="table-auto w-full border border-gray-300 shadow-lg rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">DNI</th>
            <th className="px-4 py-2">Dirección</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4">No hay empleados registrados</td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.id} className="border-t text-center">
                <td className="px-4 py-2">{emp.nombre}</td>
                <td className="px-4 py-2">{emp.dni}</td>
                <td className="px-4 py-2">{emp.direccion}</td>
                <td className="px-4 py-2">{emp.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
