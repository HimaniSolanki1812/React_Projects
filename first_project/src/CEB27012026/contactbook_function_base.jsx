import React, { useState } from "react";

function ContactBook_function_base() {
  const [contacts, setContacts] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addtoContacts = () => {
    if (fname === "" || lname === "" || phone === "") return;

    // If editing, update existing contact
    if (editingId) {
      setContacts((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? { ...c, fname: fname, lname: lname, phone: phone }
            : c
        )
      );
      setFname("");
      setLname("");
      setPhone("");
      setEditingId(null);
      return;
    }

    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      visible: false,
    };

    setContacts((prev) => [newContact, ...prev]);
    setFname("");
    setLname("");
    setPhone("");
  };

  const toggleVisible = (id) => {
    setContacts((prev) =>
      prev.map((y) =>
        y.id === id ? { ...y, visible: !y.visible } : y
      )
    );
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((y) => y.id !== id));
  };

  const startEdit = (id) => {
    const contact = contacts.find((y) => y.id === id);
    if (contact) {
      setEditingId(id);
      setFname(contact.fname);
      setLname(contact.lname);
      setPhone(contact.phone);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFname("");
    setLname("");
    setPhone("");
  };

  return (
    <>
      <input
        type="text"
        value={fname}
        placeholder="First Name"
        onChange={(e) => setFname(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={lname}
        placeholder="Last Name"
        onChange={(e) => setLname(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={phone}
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <button type="button" onClick={addtoContacts}>
        {editingId ? "Save" : "Add Contact"}
      </button>

      {editingId && (
        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>
      )}
      <br />

      <ul>
        {contacts.map((y) => (
          <li key={y.id}>
            {y.fname}
            <button type="button" onClick={() => toggleVisible(y.id)}>
              {y.visible ? "Hide" : "View"}
            </button>
            <button type="button" onClick={() => deleteContact(y.id)}>
              Delete
            </button>
            <button type="button" onClick={() => startEdit(y.id)}>
              Update
            </button>

            <div style={{ display: y.visible ? "block" : "none" }}>
              {y.lname}. {y.phone}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactBook_function_base;



