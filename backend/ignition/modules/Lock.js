const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Lock", (m) => {
  const horoscopeNFT = m.contract("horoscopeNFT");

  m.call(horoscopeNFT, "mintNFT", []);

  return { horoscopeNFT };
});
