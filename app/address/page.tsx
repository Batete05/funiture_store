import NavBar from "../components/utils/NavBar";
import { OrderSummary } from "../components/utils/OrderSummary";
import { AddressCard } from "./addressCard";
import { CheckOut } from "./checkout";

const Address = () => {
  return (
    <>
      <NavBar />
      <CheckOut />
      <div className="flex">
        <div><AddressCard /></div>
      <OrderSummary />
      </div>
    </>
  );
};
export default Address;
