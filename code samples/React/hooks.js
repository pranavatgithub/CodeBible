// UseState Hook

const [state, setState] = useState(initialState);

const [state, setState] = useState({});
setState(prevState => {
  return {...prevState, ...updatedValues}; // no auto merging like class
});

const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props); // accepts a function too
  return initialState;
});


// UseCallback

// Call useCallback at the top level of your component to cache a function definition between re-renders:


export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
}

// On the initial render, useCallback returns the fn function you have passed.

// During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.
