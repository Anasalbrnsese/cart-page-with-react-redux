import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearAll, minesFromCart, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
    const productsCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const totalPrice = productsCart.reduce((acc, product) => acc + product.price * product.quantity, 0);

 
    return (
        <div className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
                    Your <span className="text-blue-400">Cart</span>
                </h1>

                {productsCart.length > 0 ? (
                    <>
                        {/* Cart Table */}
                        <div className="overflow-x-auto border border-zinc-800 rounded-xl shadow-lg">
                            <table className="min-w-full text-sm md:text-base">
                                <thead className="bg-zinc-900/70 border-b border-zinc-800 text-gray-300 uppercase text-xs">
                                    <tr>
                                        <th className="px-4 py-3 text-left">#</th>
                                        <th className="px-4 py-3 text-left">Title</th>
                                        <th className="px-4 py-3 text-left">Description</th>
                                        <th className="px-4 py-3 text-center">Image</th>
                                        <th className="px-4 py-3 text-center">Price</th>
                                        <th className="px-4 py-3 text-center">Quantity</th>
                                        <th className="px-4 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productsCart.map((pc, i) => (
                                        <tr
                                            key={pc.id}
                                            className="border-b border-zinc-800 hover:bg-zinc-900 transition-colors duration-200"
                                        >
                                            <td className="px-4 py-4 text-gray-400">{i + 1}</td>
                                            <td className="px-4 py-4 font-semibold">{pc.title}</td>
                                            <td className="px-4 py-4 text-gray-400 max-w-xs truncate">{pc.description}</td>
                                            <td className="px-4 py-4 text-center">
                                                <img
                                                    src={pc.image}
                                                    alt={pc.title}
                                                    className="w-16 h-16 object-contain mx-auto rounded-lg border border-zinc-800"
                                                />
                                            </td>
                                            <td className="px-4 py-4 text-center text-blue-400 font-semibold">
                                                ${pc.price.toFixed(2)}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <div className="inline-flex items-center gap-2">
                                                    <button
                                                        onClick={() => dispatch(minesFromCart(pc))}
                                                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 text-lg"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="min-w-[30px]">{pc.quantity}</span>
                                                    <button
                                                        onClick={() => dispatch(addToCart(pc))}
                                                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-600/20 hover:bg-green-600/40 text-green-400 text-lg"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <button
                                                    onClick={() => dispatch(deleteFromCart(pc))}
                                                    className="px-4 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 font-semibold transition duration-200"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Summary + Actions */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
                            <div className="text-lg text-gray-300">
                                Total:{" "}
                                <span className="text-white font-bold">${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="flex gap-4">
                                <Link
                                    to="/checkout"
                                    className="border border-green-500 hover:bg-green-600 hover:text-white text-green-400 px-6 py-2 rounded-lg font-semibold transition duration-200"
                                >
                                    Checkout
                                </Link>
                                <Link
                                    to="/products"
                                    className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold text-white transition duration-200"
                                >
                                    Continue Shopping
                                </Link>
                                <button
                                    onClick={() => dispatch(clearAll())}
                                    className="border border-red-500 hover:bg-red-600 hover:text-white text-red-400 px-6 py-2 rounded-lg font-semibold transition duration-200"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    // Empty Cart
                    <div className="text-center py-20 space-y-4">
                        <h2 className="text-3xl font-bold text-gray-200">Your Cart is Empty 🛒</h2>
                        <p className="text-gray-400">Looks like you haven’t added anything yet.</p>
                        <div className="mt-5">
                            <Link
                                to="/products"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 no-underline"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
