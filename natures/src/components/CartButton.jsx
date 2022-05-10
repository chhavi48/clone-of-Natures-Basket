
// keep the add to cart component here
const CartButton = () => {

    const [count , setCount] = useState(0);

    const handleInc = ()=>{
        setCount(count+1);
    }
    const handleDec = ()=>{
        setCount(count-1);
    }
    //manage state of the count
    const handleAddCart = ()=>{
      // setCount(count+1);
      console.log("hiii");
  } 
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  
  </>;
};
export default CartButton
