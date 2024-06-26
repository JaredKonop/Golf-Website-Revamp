import React from "react";
import styles from "../components/styles/Rates.module.css";
import GolfPriceCalculator from "../components/GolfPriceCalculator";

const Rates: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centered}>
        <h1>Rates</h1>
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <div className={styles.content}>
            <table className={styles.ratesTable}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Weekdays</th>
                  <th>Weekend/Holidays</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adults</td>
                  <td>
                    $16.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                  <td>
                    $17.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                </tr>
                <tr>
                  <td>Seniors</td>
                  <td>
                    $14.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                  <td>
                    $14.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                </tr>
                <tr>
                  <td>Juniors</td>
                  <td>
                    $14.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                  <td>
                    $14.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                </tr>
                <tr>
                  <td>Golf Cart Rental per person</td>
                  <td>
                    $12.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                  <td>
                    $12.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                </tr>
                <tr>
                  <td>Golf Cart Rental single rider</td>
                  <td>
                    $15.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                  <td>
                    $15.00 (9 Holes) <br /> $8.00 (2nd Nine)
                  </td>
                </tr>
                <tr>
                  <td>Pull Cart Rental</td>
                  <td>$3.00 (9 Holes)</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <div className={styles.calc}>
              <GolfPriceCalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
