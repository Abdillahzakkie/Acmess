import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, ListGroup, Image, Card } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { FaEthereum } from 'react-icons/fa';
import {
    deliverOrder,
    getOrderDetails,
    payOrder,
} from '../actions/orderActions';
import {
    ORDER_DELIVER_RESET,
    ORDER_PAY_RESET,
} from '../constants/orderConstants';
import {widgetbuy} from '../components/interactions'

const OrderScreen = ({ match, history }) => {
    const [sdkReady, setSdkReady] = useState(false);
    const orderId = match.params.id;

    const dispatch = useDispatch();


    const cart = useSelector((state) => state.cart);

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const orderPay = useSelector((state) => state.orderPay);
    const { loading: loadingPay, success: successPay } = orderPay;

    const orderDeliver = useSelector((state) => state.orderDeliver);
    const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

    if (!loading) {
        const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

        order.itemsPrice = addDecimals(
            order.orderItems.reduce(
                (acc, item) => acc + item.qty * item.price,
                0
            )
        );
    }

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
        const addPayPalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
            script.async = true;
            script.onload = () => setSdkReady(true);
            document.body.appendChild(script);

            console.log(clientId);
        };

        if (!order || successPay || successDeliver) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch({ type: ORDER_DELIVER_RESET });
            dispatch(getOrderDetails(orderId));
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript();
            } else {
                setSdkReady(true);
            }
        }
    }, [
        dispatch,
        orderId,
        order,
        successPay,
        successDeliver,
        userInfo,
        history,
    ]);

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult));
    };

    const deliverHandler = () => {
        dispatch(deliverOrder(order._id));
    };

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <>
            <h2>Order #{order._id}</h2>
            <Row>
                <Col md={8}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name: </strong>
                                    {order.user.name}
                                </p>
                                <p>
                                    <strong>Email ID: </strong>
                                    {order.user.email}
                                </p>
                                <p>
                                    <strong>Address: </strong>
                                    {order.shippingAddress.address},{' '}
                                    {order.shippingAddress.city},{' '}
                                    {order.shippingAddress.postalCode},{' '}
                                    {order.shippingAddress.country}
                                </p>
                                <p>
                                    <strong>Delivered: </strong>
                                    {order.isDelivered
                                        ? `Delivered on ${order.deliveredAt}`
                                        : 'Not delivered'}
                                </p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method: </strong>
                                    {order.paymentMethod}
                                </p>
                                <p>
                                    <strong>Paid: </strong>
                                    {order.isPaid
                                        ? `Paid on ${order.paidAt}`
                                        : 'Not paid'}
                                </p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {order.orderItems.length === 0 ? (
                                    <Message>Your order is empty</Message>
                                ) : (
                                    <ListGroup variant='flush'>
                                        {order.orderItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fluid
                                                            rounded
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link
                                                            style={{
                                                                textDecoration:
                                                                    'none',
                                                            }}
                                                            to={`/products/${item.product}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x <FaEthereum />
                                                        {item.price} = <FaEthereum />
                                                        {(
                                                            item.qty *
                                                            item.price
                                                        ).toFixed(2)}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col><FaEthereum/>{order.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col><FaEthereum/>{order.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col><FaEthereum/>{order.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col><FaEthereum/>{order.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            {cart.paymentMethod === "paypal"
                                ?
                                (
                                    !order.isPaid && (
                                        <ListGroup.Item>
                                            {loadingPay && <Loader />}
                                            {!sdkReady ? (
                                                <Loader />
                                            ) : (
                                                <PayPalButton
                                                    amount={order.totalPrice}
                                                    onSuccess={successPaymentHandler}
                                                />
                                            )}
                                        </ListGroup.Item>
                                    )
                                ) : (
                                    !order.isPaid && (
                                        <ListGroup.Item>
                                             <Button variant="primary" onClick= {() => {widgetbuy(order.totalPrice.toString())}} >Wallet Pay</Button>
                                        </ListGroup.Item>
                                    )
                                )
                            }
                    

                            {loadingDeliver && <Loader />}
                            {userInfo &&
                                userInfo.isAdmin &&
                                order.isPaid &&
                                !order.isDelivered && (
                                    <ListGroup.Item className='d-grid'>
                                        <Button
                                            type='button'
                                            className='btn btn-block'
                                            onClick={deliverHandler}
                                        >
                                            Mark as delivered
                                        </Button>
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default OrderScreen;
