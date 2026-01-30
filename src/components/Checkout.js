import { useSelector } from "react-redux";


function Checkout() {
    const productsCart = useSelector((state) => state.cart);

    const totalPrice = productsCart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
    );

    if (productsCart.length === 0) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <a href="/" className="text-blue-400 hover:underline underline-offset-4">Go back to shopping</a>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-extrabold m-9 tracking-tight">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* LEFT COLUMN: Cart Items */}
                    <div className="lg:col-span-7">
                        <h2 className="text-xl font-semibold mb-6 border-b border-gray-800 pb-4">
                            Review your items ({productsCart.length})
                        </h2>
                        <ul className="space-y-6">
                            {productsCart.map((item) => (
                                <li key={item.id} className="flex gap-6 bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition">
                                    <div className="bg-white p-2 rounded-lg h-24 w-24 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-100 line-clamp-1">{item.title}</h3>
                                            <p className="text-sm text-gray-400 mt-1">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-lg font-semibold text-blue-400">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT COLUMN: Order Summary (Sticky) */}
                    <div className="lg:col-span-5">
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 sticky top-10">
                            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Shipping</span>
                                    <span className="text-green-400">Free</span>
                                </div>
                                <div className="border-t border-gray-800 pt-4 flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-white">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Pay With</p>

                                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition flex items-center justify-center gap-2">
                                    <span>💳</span> Credit Card
                                </button>

                                <button className="w-full bg-[#ffc439] hover:bg-[#f2ba32] text-black py-3 rounded-xl font-bold transition">
                                    PayPal
                                </button>

                                <button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-3 rounded-xl font-bold transition">
                                    Stripe
                                </button>

                                <button className="w-full border border-gray-700 hover:bg-gray-800 text-white py-3 rounded-xl font-bold transition flex items-center justify-center">
                                    Pay With Bitcoin Cash (BCH)
                                </button>

                            </div>

                            <p className="text-center text-xs text-gray-500 mt-6">
                                Secure encrypted checkout 🔒
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;