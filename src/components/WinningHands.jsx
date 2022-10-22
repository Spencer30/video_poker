import React from "react";

const WinningHands = () => {

  return (
    <div>
      <table >
        <thead>
        <tr>
          <th style={{textAlign:'left'}}>Hand Type</th>
          <th>Payout 1 Credit</th>
          <th>Payout 2 Credits</th>
          <th>Payout 3 Credits</th>
          <th>Payout Max Credits</th>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>ROYAL FLUSH</td>
          <td>250</td>
          <td>500</td>
          <td>750</td>
          <td>1000</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>STRAIGHT FLUSH</td>
          <td>50</td>
          <td>100</td>
          <td>150</td>
          <td>200</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>FOUR OF A KIND</td>
          <td>25</td>
          <td>50</td>
          <td>75</td>
          <td>100</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>FULL HOUSE</td>
          <td>9</td>
          <td>18</td>
          <td>27</td>
          <td>36</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>FLUSH</td>
          <td>6</td>
          <td>12</td>
          <td>18</td>
          <td>24</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>STRAIGHT</td>
          <td>4</td>
          <td>8</td>
          <td>12</td>
          <td>16</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>THREE OF A KIND</td>
          <td>3</td>
          <td>6</td>
          <td>9</td>
          <td>12</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>TWO PAIR</td>
          <td>2</td>
          <td>4</td>
          <td>6</td>
          <td>8</td>
        </tr>
        <tr>
          <td style={{textAlign:'left'}}>JACKS OR BETTER</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        </thead>
      </table>
    </div>
  );
};

export default WinningHands;
