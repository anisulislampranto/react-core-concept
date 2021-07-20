import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar','zain', 'kabir', 'irani', 'pata', 'natha']
  const products = [
    {name:'photoshop', price:'$99'},
    {name:'illustrator', price:'$89'},
    {name:'PDF reader', price:'$9'}
  ]

  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
       <ul>

        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
        
         <li>{nayoks[0]}</li>
         <li>{nayoks[1]}</li>
         <li>{nayoks[2]}</li>
         <li>{nayoks[3]}</li>


       </ul>

       {
         products.map(pd => <Product product={pd} > </Product>)
       }
       


      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)} >Decrese</button>
      <button onClick={() => setCount(count + 1)} >Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic users: {users.length} </h3>
    <ul>
      {
        users.map(user => <li>{user.email}</li>)
      }
    </ul>
    </div>
  )
  
}

function Product(props){
  const productStyle={
    border:'1px slid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    hright: '200px',
    width: '200px',
    float:'left'
  }
  const {name, price} = props.product;
  
  return(
    <div style={productStyle} >
      <h2> {name} </h2>
      <h1>{price}</h1>
      <button>buy now</button>
    </div>
  )
}



export default App;
