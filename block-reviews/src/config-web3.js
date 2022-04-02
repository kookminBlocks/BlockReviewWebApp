import Web3 from "web3";
import { RelayProvider } from "@opengsn/provider";

export let web3;
export let account;

export const init = async() => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
    account = await web3.eth.getAccounts();

    // GSN 셋팅 예정.
    // let gsnProvider = await RelayProvider.newProvider({
    //     provider : window.ethereum,
    //     config: {
    //          paymasterAddress
    //     }
    // }).init();
    // provider = new ethers.providers.Web3Provider(gsnProvider);
    // web3 = new Web3(window.ethereum);
    // account = await web3.eth.getAccounts();
}