import { Button, Container, InputGroup, FormControl } from "react-bootstrap";

import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import '../style/cart.css'
import { Card } from "react-bootstrap";
import { addToCart, clearAll, minesFromCart, deleteFromCart } from "../rtk/slices/cart-slice";
import { Link } from "react-router-dom";

function Cart() {
    const productsCart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = productsCart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc
    }, 0)

    return (
        <Container className="py-5">
            <div className="py-5">
                <Table striped className="cart-table"  >
                    <thead>
                        <tr>
                            <th>Total Price:{totalPrice.toFixed(3)}</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsCart.length >= 1 ? (productsCart.map((pc) => {

                            return (
                                <tr key={pc.id}>
                                    <td data-label="Id">{pc.id}</td>
                                    <td data-label="Title">
                                        <Card.Title className="product-title">
                                            {pc.title}
                                        </Card.Title>
                                    </td>
                                    <td data-label="Descriptoin">
                                        <Card.Text className="cart-description">{pc.description}</Card.Text>
                                    </td>
                                    <td data-label="Image">
                                        <img className="cart-image" src={pc.image} alt="none"></img>
                                    </td>
                                    <td data-label="Price">{pc.price}</td>
                                    <td data-label="Quantity">
                                        <InputGroup style={{ maxWidth: "260px", width: "120px" }} className="inputGroup">
                                            <Button className="btn"
                                                variant="outline-danger"
                                                onClick={() => dispatch(minesFromCart(pc))}
                                            >
                                                -
                                            </Button>
                                            <FormControl
                                                value={pc.quantity}
                                                readOnly
                                                className="text-center"
                                            />
                                            <Button className="btn"
                                                variant="outline-success"
                                                onClick={() => dispatch(addToCart(pc))}
                                            >
                                                +
                                            </Button>
                                        </InputGroup>
                                    </td>
                                    <td data-label="Actions">
                                        <Button variant={"danger"} onClick={() => { dispatch(deleteFromCart(pc)) }}>
                                            Delete
                                        </Button></td>
                                </tr>
                            )
                        }
                        )) : productsCart.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-5">
                                    <div>
                                        <h4>Your Cart is Empty 🛒</h4>
                                        <p className="text-muted">Looks like you haven’t added anything yet.</p>
                                        <Link to={"/products"}>
                                            <Button variant="outline-secondary"  >
                                                Continue Shopping
                                            </Button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <Button variant="outline-danger" onClick={() => { dispatch(clearAll()) }}>Clear Cart</Button>
        </Container>
    )

}
export default Cart;