import { useSelector } from "react-redux";

export const Customer = () => {
  const customer = useSelector((store) => store.customer);
  const fullName = customer.fullName;

  return <h2>👋 Welcome, { fullName }</h2>;
};
