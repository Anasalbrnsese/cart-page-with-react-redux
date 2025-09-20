import { Button, Container, InputGroup, FormControl } from "react-bootstrap";

import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import '../style/cart.css'
import { Card } from "react-bootstrap";
import { addToCart, clearAll, minesFromCart, deleteFromCart } from "../rtk/slices/cart-slice";

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
                <Table striped>
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
                        {productsCart.map((pc) => {

                            return (
                                <tr key={pc.id}>
                                    <td>Id:{pc.id}</td>
                                    <td>
                                        <Card.Title className="product-title">
                                            {pc.title}
                                        </Card.Title>
                                    </td>
                                    <td>
                                        <Card.Text className="cart-description">{pc.description}</Card.Text>
                                    </td>
                                    <td>
                                        <img className="cart-image" src={pc.image} alt="none"></img>
                                    </td>
                                    <td>{pc.price}</td>
                                    <td>
                                        <InputGroup style={{ maxWidth: "260px", width: "120px" }}>
                                            <Button
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
                                            <Button
                                                variant="outline-success"
                                                onClick={() => dispatch(addToCart(pc))}
                                            >
                                                +
                                            </Button>
                                        </InputGroup>
                                    </td>
                                    <td>
                                        <Button variant={"danger"} onClick={() => { dispatch(deleteFromCart(pc)) }}>
                                            Delete
                                        </Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <Button variant="outline-danger" onClick={() => { dispatch(clearAll()) }}>Clear Cart</Button>
        </Container>
    )

}
export default Cart;