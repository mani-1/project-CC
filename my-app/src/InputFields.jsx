import { changeCardNumber, changeExpiration, changeName, resetCardData } from "./slices/cardHolderNameSlice"; 
import { useState } from "react";
import { useDispatch } from "react-redux";

let InputFields = () => {

    // const [cardHolderName, setCardHolderName] = useState('');
    const dispatch = useDispatch();
    const setCardHolderName = (e) => {
        dispatch(changeName(e.target.value));
    }
    const setCardNumber = (e) => {
        dispatch(changeCardNumber(e.target.value));
    }
    const setCardExpiration = (e) => {
        dispatch(changeExpiration(e.target.value));
    }
    const resetCard = () => {
        dispatch(resetCardData());
        let inputValues = document.getElementsByTagName('input');
        for (let input of inputValues) {
            input.value = '';
        }
    }
    return (
        <div className="mt-16 w-96">
            <label className="block font-bold text-md" for="name">Name</label>
            <input className="w-96 mt-2 block border-2 h-9 p-3 border-gray-200 rounded-md hover:border-gray-300 focus:border-gray-400 focus:outline-none" name="cardHolderName" type="text" onChange={(e) => setCardHolderName(e)}></input>
            <label className="block mt-2 font-bold" for="card-number">CardNumber</label>
            <input className="w-96 mt-2 h-9 block border-2 p-3 border-gray-200 rounded-md hover:border-gray-300 focus:border-gray-400 focus:outline-none" type="text" name="card-number" onChange={(e) => setCardNumber(e)}></input>
            <div className="flex">
                <div>
                    <label className="mt-2 font-bold block" for="expiration">Expiration</label>
                    <input type="text" name="expiration" maxLength="5" className="block w-44 p-3 mt-3 h-9 border-2 border-gray-200 rounded-md hover:border-gray-300 focus:border-gray-400 focus:outline-none" onChange={(e) => setCardExpiration(e)}></input>
                </div>
                <div className="ml-9">
                    <label className="mt-2 font-bold block" for="expiration">SecurityCode</label>
                    <input type="password" name="expiration" maxLength="3" className="block w-44 p-3 mt-3 h-9 border-2 border-gray-200 rounded-md hover:border-gray-300 focus:border-gray-400 focus:outline-none"></input>
                </div>
            </div>
            <div>
            <div className="flex mt-10">
                    <button className="bg-neutral-500 text-white p-3 w-3/12 rounded-md hover:opacity-[0.9] disabled cursor-not-allowed ">Submit</button>
                    <button className="bg-yellow-400 text-black p-3 ml-6 w-3/12 rounded-md hover:opacity-[0.9]" onClick={()=> resetCard()}>Reset</button>
            </div>
            </div>
        </div>
    )
}

export default InputFields;