import React from "react";
import { checkToken } from "../../utilities/users-service";

export default function MyCollectionsPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate, "expirty date");
  }
  return (
    <>
      <h1>View My Collections!</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
