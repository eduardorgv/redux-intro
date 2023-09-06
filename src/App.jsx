import { useSelector } from "react-redux";
import { AccountOperations } from "./components/AccountOperations";
import { CreateCustomer } from "./components/CreateCustomer";
import { Customer } from "./components/Customer";
import BalanceDisplay from "./components/BalanceDisplay";

function App() {
  const { fullName } = useSelector((state) => state.customer);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName && <CreateCustomer />}
      {fullName && (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
