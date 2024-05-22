import React, { useState, useEffect } from 'react';
import './App.css';

// Array of items for the game
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Durian' },
  { id: 5, name: 'Elderberry' },
  { id: 6, name: 'Fig' },
  { id: 7, name: 'Grape' },
  { id: 8, name: 'Honeydew' },
  { id: 9, name: 'Kiwi' },
  { id: 10, name: 'Lemon' },
  { id: 11, name: 'Mango' },
  { id: 12, name: 'Nectarine' }
];

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [shuffledItems, setShuffledItems] = useState(shuffleArray(items));

  // Shuffle the items array
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  // Handle item click
  function handleItemClick(item) {
    if (selectedItems.includes(item)) {
      // Item already selected, reset the game
      setSelectedItems([]);
    } else {
      // Add the selected item to the array
      setSelectedItems([...selectedItems, item]);

      // Update best score
      if (selectedItems.length + 1 > bestScore) {
        setBestScore(selectedItems.length + 1);
      }

      // Shuffle the items
      setShuffledItems(shuffleArray(shuffledItems));
    }
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <p>Best Score: {bestScore}</p>
      <div className="item-container">
        {shuffledItems.map((item) => (
          <div key={item.id} className="item" onClick={() => handleItemClick(item)}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;