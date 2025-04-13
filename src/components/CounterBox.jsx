import React from 'react';
import counterStore from '../stores/counterStore';

export default function CounterBox() {
  const { count } = counterStore();
  return <h2>CounterBox : {count}</h2>;
}
