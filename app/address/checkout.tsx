import CheckoutSteps from "../components/utils/payment/checkoutPayment"

export const CheckOut=()=>{
    return(
        <>
        <div>
            <CheckoutSteps  currentStep={1}/>
        </div>
        </>
    )
}