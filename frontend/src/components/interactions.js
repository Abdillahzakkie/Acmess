import Acme from "../build/contracts/Acme.json";
import { ethers } from "ethers";

const contractAddress = "0x929795d0c7cF1Ca71E8D312decB9AAF56557C9b2";
export const widgetbuy = async (amount) => {
 try{ console.log(amount)
  console.log(typeof amount)
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  
  const valuex = ethers.utils.parseUnits(amount, "ether");
  console.log(valuex)
  const contract = new ethers.Contract(contractAddress, Acme.abi, signer);
  const transaction = await contract.pay(valuex, { gasLimit: 500000 });

  const receipt = await transaction.wait();
  return { hash: receipt.transaction } }
  catch{ console.log("error");} 
};
