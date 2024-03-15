import simCard from "./Images/simCard.png";
import arrow from "./Images/arrow.png";
import { useSelector } from "react-redux";

let CreditCard = () => {
    const cardHolderName = useSelector((state) => state.cardHolderDetails.cardHolderName);
    const cardNumber = useSelector((state) => state.cardHolderDetails.cardNumber);
    const cardExpiration = useSelector((state) => state.cardHolderDetails.cardExpiration).substring(0,5);
    return(
        <div className="w-3/12 h-56 my-16 ml-80 bg-gradient-to-r from-orange-300 to-violet-400 border-b-8 rounded-md shadow-black shadow-lg">
           <img className="w-20 h-20" src={simCard}></img>
           <span className="text-black text-xs/[10px] font-mono ml-3 block">card number</span>
           <span className="h-2 font-bold text-2xl ml-3 block">{cardNumber}</span>
           <div className="flex">
                <div>
                    <span className="text-black text-xs font-mono ml-3 mt-10 block">cardholder name</span>
                    <span className="ml-3 font-bold text-lg block h-2 w-56">{cardHolderName.toUpperCase()}</span>
                </div>
                <div>
                    <span className="text-black-500 text-xs font-mono ml-5 mt-10 block">expiration</span>
                    <div>
                        <span className="text-black text-xs font-mono ml-5 font-bold">VALID</span>
                        <span><img className="w-2  ml-2  mt-3 inline" src={arrow}></img></span>
                        <span className="font-bold ml-2">{cardExpiration}</span>
                        <span className="text-black text-xs/[1px] font-mono block ml-5 mb-20 font-bold">THRU</span>
                        
                    </div>
                </div>
           </div>
           
        </div>
    )
}

export default CreditCard;