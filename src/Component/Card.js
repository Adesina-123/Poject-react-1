import React from 'react';
import './Side.scss';

const Card = (props) => {
  return (
   <div className="oil">
      <div >
        <div className="rr">
        
        <div className="two-half">
            <h4>Your Wallet account</h4>
            <h1>#128.70</h1>
          </div>
          <hr className="high"/>
          <div className="flex-let">
            <div className="back">
              Cashback
              <p>#95.01</p>
            </div>
            <div className="drawer">
              Withdrawable
              <p>#33.69</p>
            </div>
            <div className="tan-btn">
              <button className="btn">Withdraw</button>
            </div>
          </div>
        </div>
        <div className="ff">
        <div className="seco-top">
          <h4>Active Payment Methods</h4>
          <p className="pay">You have no active payment instrument</p>
          <hr className="more" />
          <div className="preve">
            <a href="/" className="set">
              VIEW PAYMENT SETTINGS
            </a>
          </div>
        
        
        </div>
        
        </div>
      </div>
        <div className="hh">
        <div className="card-head">
            <h4 className="utc">Last transactions (UTC Time)</h4>
            <table>
              <tr className="ashes">
                <td>14:20 21/05/2020</td>
                <td>Refund</td>
                <td>Completed</td>
                <td>#13,640</td>
              </tr>
              <tr>
                <td>14:20 21/05/2020</td>
                <td>Withdrawal</td>
                <td>Completed</td>
                <td>#-13,259.60</td>
              </tr>
              <tr className="ashes">
                <td>14:40 14/05/2020</td>
                <td>Cashback</td>
                <td>Completed</td>
                <td>#377.50</td>
              </tr>
              <tr>
                <td>14:40 14/05/2020</td>
                <td>Payment</td>
                <td>Completed</td>
                <td>#52,678.75</td>
              </tr>
              <tr className="ashes">
                <td>14:39 14/05/2020</td>
                <td>Purchase</td>
                <td>Completed</td>
                <td>#-54,190</td>
              </tr>
            </table>
            <hr className="like" />
            <div className="details">
              {' '}
              <a href="/" className="lilly">
                VIEW DETAILS
              </a>
            </div>
          </div>
        
        </div>
   </div> 
    



     

    
  );
};

export default Card;
