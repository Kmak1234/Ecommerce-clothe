
export const Header = () => {
  return (
    <>
        <div className="bg-black h-14 flex justify-center">
            <span className="text-slate-200 text-center my-auto">Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now</span>
        </div>
        <div className="pl-36 pr-36 flow-root pt-10">
          <div className="float-left flex space-x-16">
              <div><img src="../src/assets/logo/Logo.svg" alt="Logo" /></div>
              <div>Shop</div>
              <div>New Arrivals</div>
              <div>Sales</div>
              <div>Journal</div>
          </div>
          <div className="float-right flex space-x-16">
              <div><img src="../src/assets/logo/MagnifyingGlass.svg" /></div>
              <div>Stores</div>
              <div><img src="../src/assets/logo/UserCircle.svg"/></div>
              <div><img src="../src/assets/logo/Heart.svg" /></div>
            </div>
        </div>
    </>
  )
}
