import { convertingCurrency, deposit } from "./accountSlice";

export const convertCurrencyAndDeposit = (amount, currency) => {
  if (currency === "USD") return (dispatch) => {
    dispatch(deposit(amount));
  };
  return async (dispatch, getState) => {
    dispatch(convertingCurrency());
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch(deposit(converted));
  };
};
