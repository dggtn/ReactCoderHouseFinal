import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { useState } from "react";
import { createOrder } from "../repository/orders.repositoy";

const newBuyer = {
  name: "",
  phone: "",
  email: "",
  repeatEmail: "",
};

const Cart = () => {
  const cartContext = useContext(CartContext);
  const [buyer, setBuyer] = useState(newBuyer);
  const [state, setState] = useState("typing");
  const [orderId, setOrderId] = useState();

  function onRemove(itemId) {
    cartContext.deleteFromCart(itemId);
  }

  function checkout(e) {
    e.preventDefault();

    setState("submitting");

    const newOrder = {
      buyer: buyer,
      items: cartContext.items.map((cartItem) => {
        return {
          id: cartItem.item.id,
          title: cartItem.item.title,
          price: cartItem.item.price,
        };
      }),
      total: cartContext.getTotal(),
    };

    createOrder(newOrder).then(
      (id) => {
        setOrderId(id);
        setState('success');
        cartContext.clearCart();
      },
      (error) => {
        console.log(error)
        setState("error");
      }
    );
  }

  const formInvalido =
    buyer.name === "" ||
    buyer.phone === "" ||
    buyer.email === "" ||
    buyer.email !== buyer.repeatEmail;

  return (
    <div className="flex flex-col items-center mt-20 mb-40">
      {cartContext.hasItems() ? (
        <>
          {cartContext.items.map((cartItem) => (
            <ul key={cartItem.item.id}>
              <CartItem cartItem={cartItem} onRemove={onRemove} />
            </ul>
          ))}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>{cartContext.getTotal()}</p>
            </div>
            <form onSubmit={checkout} className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-name"
                  >
                    Nombre
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-name"
                    type="text"
                    value={buyer.name}
                    onChange={(e) =>
                      setBuyer({ ...buyer, name: e.target.value })
                    }
                  />
                  {buyer.name == "" && (
                    <p className="text-red-500 text-xs italic">
                      Ingresá tu nombre.
                    </p>
                  )}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-phone"
                  >
                    Teléfeno
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-phone"
                    type="text"
                    value={buyer.phone}
                    onChange={(e) =>
                      setBuyer({ ...buyer, phone: e.target.value })
                    }
                  />
                  {buyer.phone == "" && (
                    <p className="text-red-500 text-xs italic">
                      Ingresá tu teléfono.
                    </p>
                  )}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-email"
                  >
                    Email
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-email"
                    type="email"
                    value={buyer.email}
                    onChange={(e) =>
                      setBuyer({ ...buyer, email: e.target.value })
                    }
                  />
                  {buyer.email == "" && (
                    <p className="text-red-500 text-xs italic">
                      Ingresá tu email.
                    </p>
                  )}
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-repeat-email"
                  >
                    Repetir Email
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-repeat-email"
                    type="email"
                    value={buyer.repeatEmail}
                    onChange={(e) =>
                      setBuyer({ ...buyer, repeatEmail: e.target.value })
                    }
                  />
                  {buyer.email != buyer.repeatEmail && (
                    <p className="text-red-500 text-xs italic">
                      Los email no coiciden.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <button
                  disabled={formInvalido || state == "submitting"}
                  className={
                    formInvalido
                      ? "bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
                      : "bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white"
                  }
                >
                  {state == "typing" ? (
                    "Finalizar"
                  ) : state == "submitting" ? (
                    <div role="status" className="flex">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      &nbsp;Procesando tu compra...
                    </div>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or&nbsp;
                <NavLink to="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Seguir comprando ;)
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </NavLink>
              </p>
            </div>
          </div>
        </>
      ) : state == 'success' ? (
        "¡Compra exitosa! Tu NRO de compra es: " + orderId
      ) : (
        <NavLink to="/">
          ¡Aún no elegiste nada! Te invitamos a ver nuestro catalogo
        </NavLink>
      )}
    </div>
  );
};

export default Cart;
