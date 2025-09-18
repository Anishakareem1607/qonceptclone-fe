// // src/App.jsx
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";

// export default function App() {
//   const [contacts, setContacts] = useState([]);
//   const [editingContact, setEditingContact] = useState(null);

//   // Fetch contacts
//   useEffect(() => {
//     axios.get("/api/contacts").then((res) => setContacts(res.data));
//   }, []);

//   // Add new contact
//   const addContact = async (contact) => {
//     const res = await axios.post("/api/contacts", contact);
//     setContacts([...contacts, res.data]);
//   };

//   // Update contact
//   const updateContact = async (contact) => {
//     const res = await axios.put(`/api/contacts/${contact._id}`, contact);
//     setContacts(
//       contacts.map((c) => (c._id === contact._id ? res.data : c))
//     );
//     setEditingContact(null); // clear edit mode
//   };

//   // Delete contact
//   const deleteContact = async (id) => {
//     await axios.delete(`/api/contacts/${id}`);
//     setContacts(contacts.filter((c) => c._id !== id));
//   };

//   // Handle edit button
//   const handleEdit = (contact) => {
//     setEditingContact(contact);
//   };

//   return (
//     <div>
//       <h1>Contact Manager</h1>

//       <ContactForm
//         onSubmit={editingContact ? updateContact : addContact}
//         initial={editingContact || { name: "", email: "", phone: "" }}
//         submitLabel={editingContact ? "Update" : "Save"}
//       />

//       <ContactList
//         contacts={contacts}
//         onEdit={handleEdit}
//         onDelete={deleteContact}
//       />
//     </div>
//   );
// }

// src/App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css"; // ✅ import CSS

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    axios.get("/api/contacts").then((res) => setContacts(res.data));
  }, []);

  const addContact = async (contact) => {
    const res = await axios.post("/api/contacts", contact);
    setContacts([...contacts, res.data]);
  };

  const updateContact = async (contact) => {
    const res = await axios.put(`/api/contacts/${contact._id}`, contact);
    setContacts(
      contacts.map((c) => (c._id === contact._id ? res.data : c))
    );
    setEditingContact(null);
  };

  const deleteContact = async (id) => {
    await axios.delete(`/api/contacts/${id}`);
    setContacts(contacts.filter((c) => c._id !== id));
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="container">
      <h1>Contact Manager</h1>

      <ContactForm
        onSubmit={editingContact ? updateContact : addContact}
        initial={editingContact || { name: "", email: "", phone: "" }}
        submitLabel={editingContact ? "Update" : "Save"}
      />

      <ContactList
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={deleteContact}
      />
    </div>
  );
}
