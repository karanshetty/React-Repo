
const ProductPrice = () => {
    return (
        <div className='d-flex flex-row'>
            <div className='flex-grow-1'>
                <div className='d-flex flex-row'>
                    <p className='fs-5 fw-bolder pe-2'>₹1999</p>
                    <p className='fs-5 text-decoration-line-through align-baseline pe-2'>₹2999</p>
                    <p className='fs-5 text-success fw-bolder'>20% OFF</p>
                </div>
                <div>
                    <p className='fw-medium'>Flower Printed oversized Fit</p>
                    <div className='d-flex flex-row'>
                        <i class="bi bi-star-fill text-warning pt-1 pe-2"></i>
                        <p className='fs-5 fw-bolder'>4.5 </p>
                        <p className='fs-5 fw-medium'>| 2K</p>
                    </div>
                </div>
            </div>
            <div className='justify-content-end'>
                <i class="bi bi-heart p-2"></i>
            </div>
        </div>
    )
}
export default ProductPrice;