import React, { useContext } from 'react';
import { MyContext } from './Funcnal';

const FunctionHandle = () => {
  const { items, deleteItem } = useContext(MyContext);

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionHandle;
