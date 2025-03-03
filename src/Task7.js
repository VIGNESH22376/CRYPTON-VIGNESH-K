import './Task7.css';
import { CustomerData } from './content';

function Task7() {
  return (
    <div>

      {/* Main Heading  */}
      <div className="main-heading-div">
        <h1 className="main-heading">Last Transaction</h1>
        <span className="see">See All</span>
      </div>

      {CustomerData.map((customer) => (

        // Customer Card 
        <div key={customer.id} className="card-container">

          {/* Imgae-details */}
          <div className="img-details">

            <div className="img-container">
              <img src={customer.image} alt="customer-img" className="img" />
            </div>

            <div className="Person-details">
              <h4 className="Person-name">{customer.name}</h4>
              <span className="date-time">{customer.Date}</span>
            </div>
          </div>

          {/* Amount details */}
          <div className="Amount-container">
            <h4 className="Amount-Received" style={{ color: customer.status === 'Outgoing' ? 'red' : 'green' }}>{customer.Amount}</h4>

            <span className="Status">{customer.status}</span>
          </div>


        </div>
      ))}
    </div>
  );
}

export default Task7;