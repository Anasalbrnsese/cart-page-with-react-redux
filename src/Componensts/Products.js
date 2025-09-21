import { useEffect } from "react";
import { Container, Row, InputGroup, FormControl, Card, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, handleDelete } from "../rtk/slices/products-slice";
import '../style/product.css'
import { addToCart, minesFromCart } from "../rtk/slices/cart-slice";
import { ToastContainer, toast } from 'react-toastify';


function Products() {
    const productCart = useSelector((state) => state.cart);
    const { items, status, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();


    useEffect(() => {
        const controller = new AbortController();
        dispatch(fetchProducts(controller.signal));

        return () => {
            //cleanUp
            controller.abort();
        }
    }, [dispatch]);

    // useEffect is used for toast because JSX re-renders on state changes, causing duplicate messages
    useEffect(() => {
        if (status === "failed" && error) {
            toast.error(error, {
                position: "top-center",
            })
        }
    })


    return (
        <Container className="py-5">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 p-5 py-5">
                {status === "loading" && <div className="text-center my-5">
                    <Spinner animation="border" role="status" />
                    <p>Loading products...</p>
                </div>}
                {status === "failed" && <Alert variant="danger" className="my-5 text-center">
                    {error || "Something went wrong while fetching products"}
                </Alert>
                }
                {status === "succeded" && items.map((product) => {
                    return (
                        <div key={product.id}>
                            <Card className="product-card h-100">
                                <div className="product-image">
                                    <Card.Img variant="top" src={product.image} alt={product.title} />
                                </div>
                                <Card.Body>
                                    <Card.Title className="product-title">{product.title}</Card.Title>
                                    <Card.Text className="product-description">
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-white border-0 d-flex flex-column gap-2">
                                    <Link className="w-100 fw-bold" to={`/products/${product.id}`}>
                                        <Button variant="outline-danger" className="w-100 mb-2">
                                            {/* first way to return price based on the quantity of product */}

                                            {/* ${(() => {
                                                const inCart = productCart.find((p) => p.id === product.id);
                                                return inCart ? (inCart.quantity * product.price).toFixed(3) : product.price.toFixed(3);
                                            })()} */}

                                            {/* second way to return price based on the quantity of product */}
                                            ${productCart.find((p) => p.id === product.id) ?
                                                (productCart.find((p) => p.id === product.id).quantity * product.price).toFixed(2)
                                                : product.price.toFixed(2)
                                            }
                                        </Button>
                                    </Link>
                                    <Button onClick={() => dispatch(handleDelete(product.id))} variant="outline-danger" className="w-100 mb-2">
                                        Delete
                                    </Button>
                                    {(() => {
                                        const inCart = productCart.find((p) => p.id === product.id);
                                        if (inCart) {
                                            return (
                                                <InputGroup style={{ maxWidth: "200px" }} className="mx-auto">
                                                    <Button
                                                        variant="outline-danger"
                                                        onClick={() => dispatch(minesFromCart(product))}
                                                    >
                                                        -
                                                    </Button>
                                                    <FormControl
                                                        value={inCart.quantity}
                                                        readOnly
                                                        className="text-center"
                                                    />
                                                    <Button
                                                        variant="outline-success"
                                                        onClick={() => dispatch(addToCart(product))}
                                                    >
                                                        +
                                                    </Button>
                                                </InputGroup>
                                            );
                                        } else {
                                            return (
                                                <Button
                                                    onClick={() => dispatch(addToCart(product))}
                                                    variant="outline-primary"
                                                    className="w-100"
                                                >
                                                    Add to Cart
                                                </Button>
                                            );
                                        }
                                    })()}
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                })}
            </Row>
            <ToastContainer />
        </Container >
    )

}
export default Products;