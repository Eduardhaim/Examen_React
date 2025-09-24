import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { useEmployees } from "./hooks/useEmployees";

function App() {
  const { employees, loading, addEmployee } = useEmployees();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">👨‍💼 Gestión de Empleados</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} loading={loading} />
    </div>
  );
}

export default App;
