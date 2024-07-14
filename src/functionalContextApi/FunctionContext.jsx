import React from 'react';
import FunctionHandle from './FunctionHandle';
import { MyProvider } from './Funcnal';

function FunctionContext() {
  return (
    <MyProvider>
      <FunctionHandle />
    </MyProvider>
  );
}

export default FunctionContext;
