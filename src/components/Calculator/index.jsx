import { useState } from "react";
import "./index.css";
const Calculator = () => {
  const [useType, setUseType] = useState("metric");
  const [control, setControl] = useState({
    alt: "",
    pes: "",
    measurement: "metric",
  });
  const [controlTwo, setControlTwo] = useState({
    ft: 0,
    in: 0,
    st: 0,
    lbs: 0,
  });

  const handleInputs = (e) => {
    const { name, type } = e.target;
    const value = type === "radio" ? e.target.checked : e.target.value;
    if (type === "radio" && e.target.checked) {
      setControl((prevData) => ({
        ...prevData,
        measurement: name,
      }));
    } else {
      setControl((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  let bmi = 0;
  let pesMin = 0;
  let pesMax = 0;
  const { alt, pes, measurement } = control;

  if (measurement === "metric") {
    let heightInMeters = alt / 100; // Convertir centímetros a metros
    bmi = pes / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(1);

    pesMin = 18.5 * heightInMeters * heightInMeters;
    pesMax = 24.9 * heightInMeters * heightInMeters;
  }

  const handleInputsTwo = (e) => {
    const { name, type } = e.target;
    const value = type === "radio" ? e.target.checked : e.target.value;
    if (type === "radio" && e.target.checked) {
      setControlTwo((prevData) => ({
        ...prevData,
        measurement: name,
      }));
    } else {
      setControlTwo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const heightInMeters = controlTwo.ft * 0.3048 + controlTwo.in * 0.0254;
  const weightInKilograms = controlTwo.st * 6.35 + controlTwo.lbs * 0.453592;

  // Cálculo del BMI
  let bmiNew = weightInKilograms / (heightInMeters * heightInMeters);
  bmiNew = bmiNew.toFixed(1);

  let pesMinNew = 18.5 * heightInMeters * heightInMeters;
  let pesMaxNew = 24.9 * heightInMeters * heightInMeters;

  // Convertir peso mínimo y máximo a stones y libras
  let pesMinNewSt = Math.floor(pesMinNew / 6.35);
  let pesMinNewLbs = Math.round((pesMinNew % 6.35) / 0.453592);

  let pesMaxNewSt = Math.floor(pesMaxNew / 6.35);
  let pesMaxNewLbs = Math.round((pesMaxNew % 6.35) / 0.453592);

  console.log("BMI:", bmiNew);
  console.log("Peso mínimo saludable:", `${pesMinNewSt}st ${pesMinNewLbs}lbs`);
  console.log("Peso máximo saludable:", `${pesMaxNewSt}st ${pesMaxNewLbs}lbs`);

  return (
    <>
      <section className="-mt-40 bg-white m-5 p-5 rounded-xl lg:m-0 lg:p-10 lg:-mb-56 lg:bg-white shadow-xl shadow-gray=200 ">
        <h2 className="text-2xl text-center font-bold text-gunmetal md:text-start md:mb-10">
          Enter your details below
        </h2>
        <div className="mt-5 flex gap-1 justify-between px-5 md:justify-start md:gap-60 ">
          <div className="flex gap-2">
            <input
              type="radio"
              id="metric"
              name="metric"
              value="metric"
              checked={useType === "metric"}
              onChange={() => setUseType("metric")}
              className="radio-custom"
            />
            <label
              htmlFor="metric"
              className="text-xl text-gunmetal font-semibold"
            >
              Métrico
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="imperial"
              name="imperial"
              value="imperial"
              checked={useType === "imperial"}
              onChange={() => setUseType("imperial")}
              className="radio-custom"
            />
            <label
              htmlFor="imperial"
              className="text-xl text-gunmetal font-semibold"
            >
              Imperial
            </label>
          </div>
        </div>

        {useType === "metric" ? (
          <div className="mt-5 md:flex p-5 gap-5">
            <div>
              <p className="font-light m-1">Altura</p>
              <p className="border p-4 flex justify-between px-5 rounded-md md:w-80">
                <input
                  onChange={handleInputs}
                  name="alt"
                  type="number"
                  className="w-full focus:outline-none focus:ring-0"
                  placeholder="0"
                />
                <span className="text-blue font-extrabold">cm</span>
              </p>
            </div>
            <div>
              <p className="font-light m-1">Peso</p>
              <p className="border p-4 flex justify-between px-5 rounded-md md:w-80">
                <input
                  onChange={handleInputs}
                  name="pes"
                  type="number"
                  className="w-full focus:outline-none focus:ring-0"
                  placeholder="0"
                />
                <span className="text-blue font-extrabold">kg</span>
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="mb-4">
                  <p className="font-light m-1">Altura</p>
                </div>
                <p className="border p-4 flex justify-between px-5 rounded-md md:w-80">
                  <input
                    onChange={handleInputsTwo}
                    name="ft"
                    type="number"
                    className="w-full focus:outline-none focus:ring-0"
                    placeholder="0"
                  />
                  <span className="text-blue font-extrabold">ft</span>
                </p>
              </div>
              <div className="w-1/2 p-2 mt-auto">
                <p className="border p-4 flex justify-between px-5 rounded-md md:w-80">
                  <input
                    onChange={handleInputsTwo}
                    name="in"
                    type="number"
                    className="w-full focus:outline-none focus:ring-0"
                    placeholder="0"
                  />
                  <span className="text-blue font-extrabold">in</span>
                </p>
              </div>
              <div className="w-1/2 p-2">
                <div className="mb-4">
                  <p className="font-light m-1">Weight</p>
                </div>
                <div>
                  <p className="border p-4 flex justify-between px-5 rounded-md md:w-80">
                    <input
                      onChange={handleInputsTwo}
                      name="st"
                      type="number"
                      className="w-full focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="text-blue font-extrabold">st</span>
                  </p>
                </div>
              </div>
              <div className="w-1/2 p-2 mt-auto">
                <p className="border p-4 flex justify-between px-5 rounded-md md:w-80">
                  <input
                    onChange={handleInputsTwo}
                    name="lbs"
                    type="number"
                    className="w-full focus:outline-none focus:ring-0"
                    placeholder="0"
                  />
                  <span className="text-blue font-extrabold">lbs</span>
                </p>
              </div>
            </div>
          </>
        )}
        <div className="rounded-xl mt-6 bg-color-bg-blue p-10 md:rounded-r-full md:rounded-l-xl">
          {useType === "metric" ? (
            <main className="md:flex gap-5 items-center justify-between ">
              <div>
                <p className="text-white">Your BMI is...</p>
                <p className="font-semibold text-4xl py-4 text-white">
                  {isNaN(bmi) ? 0 : bmi}
                </p>
              </div>
              <p className="text-white md:w-1/2">
                Your BMI suggests you have a healthy weight. Your ideal weight
                is between
                <span className="font-bold">
                  {" "}
                  {pesMin.toFixed(1)} - {pesMax.toFixed(1)}.
                </span>
              </p>
            </main>
          ) : (
            <main className="md:flex gap-5 items-center justify-between ">
              <div>
                <p className="text-white">Your BMI is...</p>
                <p className="font-semibold text-4xl py-4 text-white">
                  {isNaN(bmiNew) ? 0 : bmiNew}
                </p>
              </div>
              <p className="text-white md:w-1/2">
                Your BMI suggests you have a healthy weight. Your ideal weight
                is between
                <span className="font-bold">
                  {" "}
                  {pesMinNewSt}st {pesMinNewLbs}lbs - {pesMaxNewSt}st{" "}
                  {pesMaxNewLbs}lbs.
                </span>
              </p>
            </main>
          )}
        </div>
      </section>
    </>
  );
};

export default Calculator;
