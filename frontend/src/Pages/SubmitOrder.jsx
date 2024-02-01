import { useContext, useEffect, useState } from "react"
import { Store } from "../Store.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getError } from "../utils.jsx";
import Title from "../Components/Shared/Title.jsx";
import CheckoutSteps from "../Components/Shared/CheckoutSteps.jsx";
import { Col, Row } from "../imports.js";
import OrderSummary from "../Components/Shared/OrderSummary.jsx";

const SubmitOrder = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!cart.paymentMethod) {
            navigate("/payment");
        }

    }, [])

    const submitOrderHandler = async () => {
        try {
            setLoading(true);
            // Post request addOrder
            // Delete cartItems from state and localStorage
            // go to OrderDetails page /id of order
        } catch (error) {
            toast.error(getError(error));
        }
        finally {
            setLoading(false);
        }
    };

    const round2 = (number) => Math.round(number * 100 + Number.EPSILON) / 100;

    cart.itemsPrice = round2(
        cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
    );
    cart.taxPrice = round2(cart.itemsPrice * 0.17);
    cart.shippingPrice =
        cart.itemsPrice > 50
            ? round2(cart.itemsPrice * 0.1)
            : round2(cart.itemsPrice * 0.02);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    return (
        <div>
            <Title title="Order Summary" />
            <CheckoutSteps step1 step2 step3 step4 />
            <h1 className="my-3">Order Summary</h1>
            <Row>
                <Col md={8}>
                    <OrderSummary cart={cart} status={"submitOrder"} />
                </Col>
                <Col md={4}>
                    {/* <Checkout cartItems={cartItems} checkOutHandler={checkOutHandler} /> */}
                </Col>
            </Row>
        </div>
    )
}

export default SubmitOrder