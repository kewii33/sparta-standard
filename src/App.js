import React, { useState } from 'react';
import 'App.css';

function App() {
  const initialArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState('');
  const [query, setQuery] = useState('');

  const handleForEach = () => {
    let forEachList = [];
    array.forEach(function (fruit, index) {
      forEachList += `${index}: ${fruit}, `;
    });

    setResult(forEachList);
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(', '));
  };

  const handleMap = () => {
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase(query);
    });
    setResult(mappedList.join(', '));
  };

  const handleReduce = () => {
    const reducedList = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reducedList);
  };

  const handlePush = () => {
    if (!query) {
      alert('값이 없습니다!');
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(', '));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(', '));
  };

  const handleSlice = () => {
    const newArr = [...array];
    setResult(newArr.slice(0, -2).join(', '));
  };

  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, 'kiwi', 'lime');
    setResult(newArr.join(', '));
  };

  const handleIndexOf = () => {
    const newArr = [...array];
    for (let i = 0; i < newArr.length; i++) {
      if (query === newArr[i]) {
        setResult(i);
        return;
      }
    }
    setResult(-1);
  };

  const handleIncludes = () => {
    const newArr = [...array];
    for (let i = 0; i < newArr.length; i++) {
      if (query === newArr[i]) {
        setResult('true');
        return;
      }
    }
    setResult('false');
  };

  const handleFind = () => {
    const findFruit = array.find(function (fruit) {
      return fruit.includes(query);
    });
    setResult(findFruit !== undefined ? findFruit : 'Not found');
  };

  const handleSome = () => {
    const findFruit = array.find(function (fruit) {
      return fruit.includes(query);
    });
    setResult(findFruit !== undefined ? 'true' : 'false');
  };

  const handleEvery = () => {
    const everyList = array.every(function (fruit) {
      return fruit.length > 5;
    });
    setResult(everyList ? 'true' : 'false');
  };

  const handleSort = () => {
    const newArr = [...array];
    const sortList = newArr.sort((a, b) => a.localeCompare(b));
    setResult(sortList.join(', '));
  };

  const handleJoin = () => {
    const newArr = [...array];
    setResult(newArr.join(', '));
  };

  return (
    <div className="outer-container">
      <div className="app-style">
        <h1>Standard반 배열 API</h1>
        <div>
          <input
            value={query}
            type="text"
            placeholder="Enter text"
            onChange={function (e) {
              setQuery(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={handleForEach}>forEach</button>
          <button onClick={handleFilter}>filter</button>
          <button onClick={handleMap}>map</button>
          <button onClick={handleReduce}>reduce</button>
          <button onClick={handlePush}>push</button>
          <button onClick={handlePop}>pop</button>
          <button onClick={handleSlice}>slice</button>
          <button onClick={handleSplice}>splice</button>
          <button onClick={handleIndexOf}>indexOf</button>
          <button onClick={handleIncludes}>includes</button>
          <button onClick={handleFind}>find</button>
          <button onClick={handleSome}>some</button>
          <button onClick={handleEvery}>every</button>
          <button onClick={handleSort}>sort</button>
          <button onClick={handleJoin}>join</button>
        </div>
        <div className="inner-container">
          <div className="originalArray">
            <strong>원본배열 : </strong>
            {array.join(', ')}
          </div>
          <div className="resultArray">
            <strong>결과물 : </strong>
            {result}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
