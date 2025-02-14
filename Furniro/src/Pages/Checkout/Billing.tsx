import { useState } from "react";
import { useCart } from "../../Context/CartContext";

const Billing = () => {
  const [selected, setSelected] = useState("Direct Bank Transfer");
  const { cart, getSubtotal } = useCart(); 

  const options = ["Direct Bank Transfer", "Cash On Delivery", "Direct Bank Transfe"];

  return (
    <div className="min-h-screen flex items-center justify-center font-poppins">
      <div className="w-fit flex items-start space-x-8">
        
        
        <div className="w-[608px] flex flex-col">
          
          <h1 className="text-2xl font-semibold mb-6 text-center">Billing details</h1>

          <div className="flex flex-col space-y-4">
          
            <div className="flex space-x-4">
              <div className="flex flex-col w-1/2">
                <label className="text-gray-700 font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-gray-700 font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Company Name (Optional)</label>
              <input
                type="text"
                className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">ZIP Code</label>
              <input
                type="text"
                className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Country / Region</label>
              <input
                type="text"
                className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Street Address</label>
              <input
                type="text"
                className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Town / City</label>
              <input
                type="text"
                className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Province</label>
              <input
                type="text"
                className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Add-on Address</label>
              <input
                type="text"
                className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Additional Information</label>
              <input
                type="text"
                placeholder="Additional information"
                className="w-full h-[40px] border border-gray-400 rounded-[10px] bg-white p-3"
              />
            </div>
          </div>
      </div>

      
        <div className="w-[608px] h-[789px] flex-shrink-0 bg-white rounded-lg p-6 flex flex-col">
          
          <div className="flex justify-between w-full mb-4">
            <span className="text-preto text-[16px] font-medium">Product</span>
            <span className="text-font-descr text-[16px] font-normal">Subtotal</span>
          </div>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between w-full mb-2">
              <span className="text-preto text-[16px] font-medium">
                {item.quantity}x {item.name} 
              </span>
              <span className="text-font-descr text-[16px] font-normal">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}
              </span>
            </div>
          ))}

          <div className="flex justify-between w-full mb-2">
            <span className="text-preto text-[16px] font-medium">Subtotal</span>
            <span className="text-font-descr text-[16px] font-normal">{getSubtotal()}</span>
          </div>

          <div className="flex justify-between w-full mb-4">
            <span className="text-preto text-[16px] font-medium">Total</span>
            <span className="text-begeButton font-poppins text-[20px] font-medium">{getSubtotal()}</span>
          </div>

          <div className="w-full h-[1px] bg-cinza mt-2"></div>

          <div className="flex flex-col space-y-3 mt-4">
            {options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center cursor-pointer p-3 rounded-md  ${
                  selected === option ? "bg-gray-300 text-gray-800" : "bg-white text-black"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  className="mr-2"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>

         
          {selected === "Direct Bank Transfer" && (
            <div className="mt-6 p-4 text-cinza-letras">
              <p className="text-sm">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped until the
                funds have cleared in our account.
              </p>
            </div>
          )}
          
          <p className="mt-[20px] text-black font-poppins text-[16px] font-light leading-normal">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
          </p>

          <div className="flex justify-center mt-[90px]">
            <button className="w-[318px] h-[64px] rounded-[15px] border border-preto text-preto text-[20px] font-normal">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
