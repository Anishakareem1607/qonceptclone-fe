
import React from "react";

export default function ContactList({ contacts, onEdit, onDelete }) {
  if (!contacts.length) return <p>No contacts found.</p>;

  return (
    <ul>
      {contacts.map((c) => (
        <li key={c._id}>
          <div className="contact-info">
            <strong>{c.name}</strong> <br />
            {c.email} <br />
            {c.phone}
          </div>
          <div className="contact-actions">
            <button onClick={() => onEdit(c)}>Edit</button>
            <button onClick={() => onDelete(c._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
