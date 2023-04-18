import './Weight.css'

export const Weight = () => {

  const updateResults = ()=>  {

    const inputEl = document.getElementById("input");
    const errorEl = document.getElementById("error");
    const resultEl = document.getElementById("result");
    let errorTime;
    let resultTime;

    inputEl.addEventListener("input", updateText);

    if (inputEl.value >= 1000) {
      errorEl.innerText = "Limit to 999 lbs!";
    }

    if (inputEl.value <= 0 || isNaN(inputEl.value)) {
      
      /*
      clearTimeout(errorTime);
      errorTime = setTimeout(() => {
        errorEl.innerText = "";
        inputEl.value = "";
      }, 2000);
      */
    } else {
      resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);
      /*
      clearTimeout(resultTime);
      resultTime = setTimeout(() => {
        resultEl.innerText = "";
        inputEl.value = "";
      }, 10000);
      */
    }
  }

  const updateText = (event) => {
    const displayElement = document.getElementById("displayText");
    displayElement.innerHTML = event.target.value;
  }

  return (
    <div>
      <h1 class="title">Weight Converter</h1>      
      <div className="weight_container">
        <h2>lbs ➡️ kg</h2>
        <div className="input_container">
          <input className='input' onChange={updateResults} type="number" maxlength="3" id="input" class="input" step=".1" placeholder="Enter weight (lbs)" />
        </div>
        <p className='weight_result'><span className='weight_result' id="displayText" ></span> (lbs)</p>
        <p>⬇️</p>
        <p className='weight_result'><span className='weight_result' id='result'></span> (kg)</p>
        <br />
        <p className="error" id="error"></p>        
      </div>
    </div>
  );
};
