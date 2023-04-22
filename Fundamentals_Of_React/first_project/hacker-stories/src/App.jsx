import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Carl',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const List = () => {
  return (
    <>
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Search = () => {
  const handleChange = (event) => {
    //synthetic event
    console.log(event);
    //value of target (here: input HTML element)
    console.log(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="search">Search: </label>
        <input type="text" onChange={handleChange} />
      </div>
    </>
  );
};

function App() {
  return (
    <div>
      <h1>My Hackers Stories</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;
