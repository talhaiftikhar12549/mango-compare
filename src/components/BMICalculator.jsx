// export default function BMICalculator() {
//   return (
//     <>
//       <section className=" bg-gradient-to-r from-[rgb(16_185_129_/_0.05)] to-[rgb(245_158_11_/_0.05)] w-full">
//         <div className="max-w-[1280px] mx-auto py-[48px]">
//           <div className=" px-4 text-center">
//             <h2 className="!text-[24px] md:!text-[24px] !font-[600] text-gray-900 mb-4">
//               BMI Calculator
//             </h2>
//             <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-2xl mx-auto">
//               Use the BMI Calculator to check if you qualify for weight loss
//               treatments. Body Mass Index (BMI) helps determine whether the
//               treatment is appropriate for you.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { useState } from "react";

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);

    if (!parsedHeight || !parsedWeight) {
      alert("Please enter valid height and weight.");
      return;
    }

    let heightMeters = 0;
    let weightKg = 0;

    if (unitSystem === "metric") {
      heightMeters = parsedHeight / 100; // cm to m
      weightKg = parsedWeight;
    } else {
      heightMeters = parsedHeight * 0.3048; // ft to m
      weightKg = parsedWeight * 0.453592; // lb to kg
    }

    const bmiValue = weightKg / (heightMeters * heightMeters);
    const rounded = bmiValue.toFixed(1);
    setBmi(rounded);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Normal weight");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obesity");
  };

  return (
    <>
      <section className=" bg-gradient-to-r from-[rgb(16_185_129_/_0.05)] to-[rgb(245_158_11_/_0.05)] w-full">
        <div className="max-w-[1280px] mx-auto py-[48px]">
          <div className=" px-4 text-center">
            <h2 className="!text-[24px] md:!text-[24px] !font-[600] text-gray-900 mb-4">
              BMI Calculator
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-2xl mx-auto">
              Use the BMI Calculator to check if you qualify for weight loss
              treatments. Body Mass Index (BMI) helps determine whether the
              treatment is appropriate for you.
            </p>
          </div>
          <div className=" mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div>
              <h2 className="text-2xl font-bold mb-6">BMI Calculator</h2>

              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  Height ({unitSystem === "metric" ? "cm" : "ft"})
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={
                    unitSystem === "metric" ? "e.g. 170" : "e.g. 5.8"
                  }
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  Weight ({unitSystem === "metric" ? "kg" : "lb"})
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unitSystem === "metric" ? "e.g. 65" : "e.g. 160"}
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <span className="font-semibold">Unit System:</span>
                <div className="flex gap-6 mt-2 flex-wrap">
                  <label>
                    <input
                      type="radio"
                      name="unit"
                      value="metric"
                      checked={unitSystem === "metric"}
                      onChange={() => setUnitSystem("metric")}
                      className="mr-1"
                    />
                    Metric (cm/kg)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="unit"
                      value="imperial"
                      checked={unitSystem === "imperial"}
                      onChange={() => setUnitSystem("imperial")}
                      className="mr-1"
                    />
                    Imperial (ft/lb)
                  </label>
                </div>
              </div>

              <button
                onClick={calculateBMI}
                className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition"
              >
                Calculate BMI
              </button>
            </div>
            {/* Inputs */}

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Results</h2>
              <div className="bg-gray-100 p-6 rounded-md text-center mb-6">
                <p className="text-gray-600">Your BMI</p>
                <div className="text-4xl font-bold my-2">
                  {bmi ? bmi : "--"}
                </div>
                <p className="text-gray-600">
                  {category || "Calculate to see your category"}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">BMI Categories:</h3>

                {[
                  {
                    label: "Underweight",
                    range: "Below 18.5",
                    color: "bg-blue-400",
                    width: "18.5%",
                  },
                  {
                    label: "Normal weight",
                    range: "18.5 - 24.9",
                    color: "bg-green-400",
                    width: "24.9%",
                  },
                  {
                    label: "Overweight",
                    range: "25 - 29.9",
                    color: "bg-yellow-400",
                    width: "29.9%",
                  },
                  {
                    label: "Obesity",
                    range: "30 and above",
                    color: "bg-red-400",
                    width: "40%",
                  },
                ].map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 font-medium">
                        {item.label}
                      </span>
                      <span className="text-gray-500">{item.range}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded mt-1">
                      <div
                        className={`h-full ${item.color} rounded`}
                        style={{ width: item.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Results */}
          </div>
        </div>
      </section>
    </>
  );
}
