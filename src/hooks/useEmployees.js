import { useEffect, useState } from "react";

const API_URL = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

export function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    } finally {
      setLoading(false);
    }
  };

  const addEmployee = async (employee) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      const newEmployee = await res.json();
      setEmployees([...employees, newEmployee]);
    } catch (error) {
      console.error("Error al crear empleado:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return { employees, loading, addEmployee };
}
