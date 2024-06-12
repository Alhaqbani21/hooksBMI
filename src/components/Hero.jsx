import React, { useState } from 'react';
import imageTotal from '../assets/imageTotal.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

function Hero() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [currentimage, setCurrentimage] = useState('');
  const [alertBMI, setalertBMI] = useState('');
  const [colorAlert, setcolorAlert] = useState('');

  function imageChanger(newBmi) {
    if (newBmi < 18.5) {
      setCurrentimage(image1);
      setalertBMI('نقص في الوزن');
      setcolorAlert('yellow');
    } else if (newBmi < 24.9 && newBmi >= 18.5) {
      setCurrentimage(image2);
      setalertBMI('وزن طبيعي');
      setcolorAlert('green');
    } else if (newBmi < 29.9 && newBmi >= 24.9) {
      setCurrentimage(image3);
      setalertBMI('زيادة في الوزن');
      setcolorAlert('orange');
    } else if (newBmi < 34.9 && newBmi >= 29.9) {
      setCurrentimage(image4);
      setalertBMI('بدانة');
      setcolorAlert('pink');
    } else if (newBmi > 35) {
      setCurrentimage(image5);
      setalertBMI('بدانة مفرطة');
      setcolorAlert('red');
    }
  }

  function calculateBMI() {
    console.log('Weight:', weight);
    console.log('Height:', height);

    let result = weight / (((height / 100) * height) / 100);
    console.log('BMI:', result);
    setBmi(result);
    imageChanger(result);
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center gap-10">
          <img src={imageTotal} className="max-w-sm rounded-lg shadow-2xl" />
          <h1 className="text-5xl font-bold text-center"> BMI حاسبة</h1>
          <p className="py-6 text-center">
            لحساب الكتلة يرجى ادخال التفاصيل التالية
          </p>
          <div className="flex justify-center items-center gap-2 max-md:flex-col">
            <input
              type="number"
              placeholder="cm الطول"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={(e) => {
                setHeight(parseFloat(e.target.value));
              }}
            />
            <input
              type="number"
              placeholder="kg الوزن"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={(e) => {
                setWeight(parseFloat(e.target.value));
              }}
            />
            <button onClick={calculateBMI} className="btn btn-primary">
              حساب الكتلة
            </button>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              {currentimage !== '' && weight !== 0 && height !== 0 && (
                <img src={currentimage} alt="Shoes" />
              )}
            </figure>
            <div className="card-body">
              {bmi !== null && weight !== 0 && height !== 0 && (
                <p className="text-center mt-4 text-2xl">
                  BMI: {bmi.toFixed(2)}
                </p>
              )}
              {bmi !== null && weight !== 0 && height !== 0 && (
                <p
                  style={{ color: colorAlert }}
                  className="text-center mt-4 text-2xl"
                >
                  {alertBMI}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
