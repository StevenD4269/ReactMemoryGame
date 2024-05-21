import './App.css';



// Define an array of items
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Watermelon' },
  { id: 5, name: 'Date' },
  { id: 6, name: 'Strawberry' },
  { id: 7, name: 'Grape' },
  { id: 8, name: 'Honeydew' },
  { id: 9, name: 'Kiwi' },
  { id: 10, name: 'Lemon' },
  { id: 11, name: 'Mango' },
  { id: 12, name: 'Nectarine' }
];

//create my hooks/props
function App() {
  const [selectedItems, setSelectedItems] = useState([]); //store the items selected in an array
  const [bestScore, setBestScore] = useState(0); //store the highest score starting at 0
  const [shuffledItems, setShuffledItems] = useState(shuffleArray(items)); // //store and update the shuffled items
}

//shuffle the items and do it randomly 



//handle item clicking

// 


export default App;
