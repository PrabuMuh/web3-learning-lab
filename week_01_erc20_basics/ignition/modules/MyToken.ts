import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Apollo", (m) => {
  const myToken = m.contract("MyToken");

  return { myToken };
});