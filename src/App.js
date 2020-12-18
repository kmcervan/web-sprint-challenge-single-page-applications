import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';

import Form from './Form';
import Home from './Home';
import Order from './Order';
import schema from './schema';

const defaultValues = {
  name:'',
  size:'',
  pepperoni: false,
  sauage: false,
  pepper: false,
  bacon: false,
  special:'',
};
const defaultErrors = {
  name:'',
  size:'',
  special:'',
};

const initialOrder = [];
const initialDisable = true;

const App = () => {

  const [orders, setOrders] = useState(initialOrder);
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState(defaultErrors);
  const [disabled, setDisabled] = useState(initialDisable);

  const change = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''});
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]: err.errors[0],});
    })
    setFormValues({...formValues, [name]: value,});
  };

  const submit = evt => {
    evt.preventDefault();
    const newOrder = {
      name:formValues.name,
      size:formValues.size,
      special:formValues.special,
      toppings:["pepperoni", "sausage", "pepper", "bacon"].filter((topping) =>
        formValues[topping]),
    };
    setOrders([...orders, newOrder]);
    setFormValues(defaultValues);
  };
  useEffect(() => {
    schema.isValid(formValues).then((valid)=> {
      setDisabled(!valid);
    });
  }, [formValues] );



  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </nav>
      <Route exact path='/'>
        <h1>Lambda Eats</h1>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form change={change} submit={submit} values={formValues} disabled={disabled} error={formErrors}/>
        {orders.map((order) => {
          return <Order key={order.id} details={order}/>;
        })}
      </Route>

    </div>
  );
};
export default App;
