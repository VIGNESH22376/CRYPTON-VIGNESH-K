import './Task1.css';

function Task1() {
  return (
    <div className="container">

      {/* Revenue */}
      <div className="card">

        {/* upper content */}
        <div className="upper-content-div">
         <h1 className="Heading">Revenue</h1>
         <span className="arrow-red"><i className="fa-solid fa-arrow-down "></i> 10%</span>
        </div>

        {/* Lower content  */}
        <div className="Lower-content-div"> 
        <i className="fa-solid fa-arrow-up-right-from-square icon1"></i>
        <span className="content-Lower">$2.047</span>
        </div>
        
      </div>

      {/* Orders */}
      <div className="card">
        {/* upper content */}
        <div className="upper-content-div">
         <h1 className="Heading">Orders</h1>
         <span className="arrow-green"><i class="fa-solid fa-arrow-up"></i> 20%</span>
        </div>

        {/* Lower content  */}
        <div className="Lower-content-div"> 
        <i className="fa-solid fa-cart-shopping icon1" style={{background: 'green'}}></i>
        <span className="content-Lower">356</span>
        </div>
      </div>

      {/* Dine in  */}
      <div className="card">

        {/* upper content */}
        <div className="upper-content-div">
         <h1 className="Heading">Dine in</h1>
         <span className="arrow-green"><i class="fa-solid fa-arrow-up"></i> 10%</span>
        </div>

        {/* Lower content  */}
        <div className="Lower-content-div"> 
        <i className="fa-solid fa-utensils icon1" style={{background: 'red'}}></i>
        <span className="content-Lower">220</span>
        </div>

      </div>

      {/* Take away */}
      <div className="card">

        {/* upper content */}
        <div className="upper-content-div">
         <h1 className="Heading">Take away</h1>
         <span className="arrow-red"><i className="fa-solid fa-arrow-down "></i> 5%</span>
        </div>

        {/* Lower content  */}
        <div className="Lower-content-div">
        <i className="fa-solid fa-trophy icon1" style={{background: 'yellow'}}></i>
        <span className="content-Lower">135</span>
        </div>   

      </div>
    </div>
  );
}

export default Task1;
