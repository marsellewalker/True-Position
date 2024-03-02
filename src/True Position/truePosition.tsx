import { useState } from "react";

const Trueposition = () => {
  const [truePositionX, setTruePositionX] = useState(0);
  const [truePositionY, setTruePositionY] = useState(0);
  const [truePositionX2, setTruePositionX2] = useState(0);
  const [truePositionY2, setTruePositionY2] = useState(0);
  const [total, setTotal] = useState(0);

  const [tolerance, settolerance] = useState(0);
  const [minDia, setMinDia] = useState(0);
  const [maxDia, setMaxDia] = useState(0);
  const [midDia, setMidDia] = useState(0);
  const [nomDia, setNomDia] = useState(0);

  const [mmc, setMmc] = useState(0);
  const [lmc, setLmc] = useState(0);

  const [bonusT, setbonusT] = useState(0);
  const [deviation, setDeviation] = useState(0);

  /*const tolerance = 5;*/

  /*const handleInputChange = (e, axis) => {
    const inputValue = e.target.value;
    const intValue = parseFloat(inputValue);

    if (!isNaN(intValue)) {
      if (axis === "") {
        setTruePositionX(inputValue);
      } else if (axis === "") {
        setTruePositionY(inputValue);
      }
    }
  };*/

  /* const circleStyle = {
    top: `${truePositionX}px`,
    left: `${truePositionY}px`,
  };*/

  /*const handletolChange = (e, tol) => {
    const tolval = parseFloat(e.target.value);
    if (!isNaN(tolval)) {
        settolerance(tolval);
      
    }
  };
*/

  /*<label className="two">

<label className="circle-label">
<label>x position</label>
  <input
    type="text"
    value={truePositionX}
    onChange={(e) => handleInputChange(e, "")}
  />
  <label>x position</label>
  <input
    type="text"
    value={truePositionY}
    onChange={(e) => handleInputChange(e, "")}
  />



  <label className="circle-label2" style={circleStyle} />

  <label>Actual x position</label>
  <input
    type="text"
    value={truePositionX}
    onChange={(e) => handleInputChange(e, "")}
  />
  <label>Actual x position</label>
  <input
    type="text"
    value={truePositionY}
    onChange={(e) => handleInputChange(e, "")}
  />
</label>
</label>*/

  const truePositions = () => {
    if (
      truePositionX &&
      truePositionY &&
      truePositionX2 &&
      truePositionY2 !== 0
    ) {
      const deviationx = Math.abs(truePositionX - truePositionX2);
      const deviationy = Math.abs(truePositionY - truePositionY2);

      setTotal( Math.sqrt(deviationx **2 + deviationy ** 2));
      setbonusT(mmc - lmc);

      /*setTruePositionX(0);
      setTruePositionX2(0);
      setTruePositionY(0);
      setTruePositionY2(0);*/
    }
  };

  const calc = () => {
    if (maxDia !== 0) {
      setMidDia(maxDia - tolerance / 2);
      /*setMinDia(0);
      setMaxDia(0);*/
    }
  };

  const closeApp = () => {
    window.location.href = "about:blank"; /* window.close();*/
  };

  const MMC = () => {
    setMmc(nomDia + tolerance);
  };

  const LMC = () => {
    setLmc(nomDia - tolerance);
  };

  return (
    <>
      <div className="container">
        <div className="container1">
          <h1>True Position</h1>
        </div>
        <div>
          <div className="img">
            <img src="true position.jpg" alt="True Position img" />
          </div>
          <hr />
        </div>
        <div className="container2">
          <div>
              <label>X position</label>
              <input
                type="number"
                value={truePositionX}
                onChange={(e) => setTruePositionX(parseFloat(e.target.value))}
              />
              <br/>
              <label> Y position</label>
              <input
                type="number"
                value={truePositionY}
                onChange={(e) => setTruePositionY(parseFloat(e.target.value))}
              />
          </div>
              
          <div>
              <label>Actual X position</label>
              <input
                type="number"
                value={truePositionX2}
                onChange={(e) => setTruePositionX2(parseFloat(e.target.value))}
              />
            <br/>
              <label>Actual Y position</label>
              <input
                type="number"
                value={truePositionY2}
                onChange={(e) => setTruePositionY2(parseFloat(e.target.value))}
              />
            </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="container3">
          <div>
            <h3>
              Tolerance:{" "}
              <input
                type="number"
                value={tolerance}
                onChange={(e) => settolerance(parseFloat(e.target.value))}
              />
            </h3>
            <label>Min: </label>
            <input
              type="number"
              value={minDia}
              onChange={(e) => setMinDia(parseFloat(e.target.value))}
            />
            <label> Max: </label>
            <input
              type="number"
              value={maxDia}
              onChange={(e) => setMaxDia(parseFloat(e.target.value))}
            />
            <button onClick={calc}>Find Mid Point</button>
            <br />
            <label htmlFor="decimalInput">Midpoint value: ({midDia})</label>
            <br />
            <label>True Position of Hole: </label>
            <label htmlFor="decimalInput">{total}</label>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="container4">
          <div className="base-box">
            <label>
              Nominal Dia:
              <input
                type="number"
                value={nomDia}
                onChange={(e) => setNomDia(parseFloat(e.target.value))}
              />
            </label>
            <br />
            <hr />

            <div>
              <input type="checkbox" onClick={MMC} />
              <label>
                Apply Maximum <br />
                <span></span>Material Condition
              </label>

              <br />
              <hr />
              <input type="checkbox" onClick={LMC} />
              <label>
                Apply Least <br />
                <span></span>Material Condition
              </label>
              <hr />

              <label>Bonus Tolerance: {bonusT}</label>
              <hr />

              <label>
                True Position at MMC:<label>{mmc}</label>
              </label>
              <hr />

              <label>
                True Position at MMC:<label>{lmc}</label>
              </label>
              <hr />
              <label>
                Deviation Angel:<label>0.0020 (not active yet) </label>
              </label>
            </div>
          </div>
        </div>

        <div className="btns">
          <button onClick={truePositions}>Enter</button>
          <button>Print</button>
          <button onClick={closeApp}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Trueposition;
