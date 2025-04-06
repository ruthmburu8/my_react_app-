import React, { useState } from 'react';

function DynamicListManager() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]); // Initialize with the existing item

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem(''); // Clear the input field
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dynamic List Manager</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter an item"
          value={newItem}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.addButton}>
          Add Item
        </button>
      </div>
      <div style={styles.listContainer}>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '10px 20px',
    textAlign: 'left',
    border: '1px solid #a9a9a9',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2e8b57',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '15px',
  },
  input: {
    flexGrow: 1,
    padding: '10px',
    border: '1px solid #66cdaa',
    borderRadius: '3px',
    marginbottom: '20px',

    fontSize: '16px',
  },
  addButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '10px',
    
  },
  listContainer: {
    border: '1px solid #66cdaa',
    borderRadius: '3px',
    backgroundColor: '#e9ecef',
    padding: '15px',
    minHeight: '100px',
  },
  listItem: {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    listStyleType: 'disc',
    marginLeft: '20px',
  },
};

export default DynamicListManager;