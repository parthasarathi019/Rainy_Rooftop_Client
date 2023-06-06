import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Chackout_Form from "./chackout_Form/chackout_Form";
import useCart from "../../../../Hooks/useCart";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [uesrs_own_cart] = useCart();
    const total = uesrs_own_cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <Chackout_Form cart={uesrs_own_cart} price={price}></Chackout_Form>
            </Elements>
        </div>
    );
};

export default Payment;