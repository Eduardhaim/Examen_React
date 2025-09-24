
import { useState } from "react";
import Swal from "sweetalert2";

export default function EmployeeForm({ addEmployee }) {
  const [form, setForm] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.dni || !form.direccion || !form.email) {
      Swal.fire("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    if (!validateEmail(form.email)) {
      Swal.fire("Error", "El email no tiene un formato válido", "error");
      return;
    }

    addEmployee(form);
    Swal.fire("Éxito", "Empleado agregado correctamente", "success");

    setForm({ nombre: "", dni: "", direccion: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">➕ Agregar empleado</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        name="dni"
        placeholder="DNI"
        value={form.dni}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={form.direccion}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Guardar
      </button>
    </form>
  );
}
