
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/contacts";

export async function fetchContacts() {
  const res = await axios.get(API_BASE);
  return res.data;
}

export async function createContact(data) {
  const res = await axios.post(API_BASE, data);
  return res.data;
}

export async function updateContact(id, data) {
  const res = await axios.put(`${API_BASE}/${id}`, data);
  return res.data;
}

export async function deleteContact(id) {
  const res = await axios.delete(`${API_BASE}/${id}`);
  return res.data;
}
