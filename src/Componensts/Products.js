import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, handleDelete } from "../rtk/slices/products-slice";
import { addToCart, minesFromCart } from "../rtk/slices/cart-slice";
import { ToastContainer, toast } from "react-toastify";

function Products() {
    const productCart = useSelector((state) => state.cart);
    const { items, status, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();
        dispatch(fetchProducts(controller.signal));
        return () => controller.abort();
    }, [dispatch]);

    useEffect(() => {
        if (status === "failed" && error) {
            toast.error(error, { position: "top-center" });
        }
    }, [status, error]);

    return (
        <div className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Explore Our <span className="text-blue-400">Products</span>
                </h1>

                {/* Loading State */}
                {status === "loading" && (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p>Loading products...</p>
                    </div>
                )}

                {/* Error State */}
                {status === "failed" && (
                    <div className="text-center py-10 text-red-400 font-semibold bg-red-900/20 border border-red-800 rounded-lg max-w-xl mx-auto">
                        {error || "Something went wrong while fetching products."}
                    </div>
                )}

                {/* Success State */}
                {status === "succeded" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {items.map((product) => {
                            const inCart = productCart.find((p) => p.id === product.id);
                            const displayPrice = inCart
                                ? (inCart.quantity * product.price).toFixed(2)
                                : product.price.toFixed(2);

                            return (
                                <div
                                    key={product.id}
                                    className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-200 flex flex-col"
                                >
                                    {/* Product Image */}
                                    <div className="w-full h-64 bg-zinc-950 flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-contain p-6"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex flex-col flex-grow p-5 space-y-3">
                                        <h3 className="text-lg font-semibold text-white line-clamp-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Product Actions */}
                                    <div className="p-5 border-t border-zinc-800 flex flex-col gap-3">
                                        <Link
                                            to={`/products/${product.id}`}
                                            className="text-center px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold transition duration-200"
                                        >
                                            ${displayPrice}
                                        </Link>

                                        <button
                                            onClick={() => dispatch(handleDelete(product.id))}
                                            className="text-center px-4 py-2 rounded-lg border border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-semibold transition duration-200"
                                        >
                                            Delete
                                        </button>

                                        {inCart ? (
                                            <div className="flex items-center justify-center gap-3">
                                                <button
                                                    onClick={() => dispatch(minesFromCart(product))}
                                                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 text-lg"
                                                >
                                                    -
                                                </button>
                                                <span className="text-lg font-semibold">
                                                    {inCart.quantity}
                                                </span>
                                                <button
                                                    onClick={() => dispatch(addToCart(product))}
                                                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-600/20 hover:bg-green-600/40 text-green-400 text-lg"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => dispatch(addToCart(product))}
                                                className="text-center px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-400 hover:bg-gray-800 font-semibold transition duration-200"
                                            >
                                                Add to Cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <ToastContainer />
            </div>
        </div>
    );
}

export default Products;
