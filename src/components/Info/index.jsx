import "./index.css";
const Info = () => {
  return (
    <>
      <section>
        <div className="md:flex justify-center items-center lg:mt-32  ">
          <img
            src="./images/image-man-eating.webp"
            alt="imagen-man-eating"
            className="md:w-96 md:h-96 lg:w-grande lg:h-1/2"
          />

          <div className="mt-1 p-5 lg:justify-center ">
            <h3 className=" p-5 text-gunmetal text-3xl text-start font-semibold lg:text-4xl">
              What your BMI result means
            </h3>
            <p className="mt-1 px-5 lg:w-grande">
              A BMI range of 18.5 to 24.9 is considered a healthy weight.
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-10  md:p-20 lg:flex-row lg:bg-color-fondo lg:m-20 lg:justify-evenly ">
          <div className="lg:w-96">
            <img src="./images/icon-eating.svg" alt="icon-eating" />
            <p className="mt-5 text-xl font-semibold text-gunmetal">
              Healthy eating
            </p>
            <p className="mt-5 ">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
          <div className="lg:w-96">
            <img src="./images/icon-exercise.svg" alt="icon-eating" />
            <p className="mt-5 text-xl font-semibold text-gunmetal">
              Healthy eating
            </p>
            <p className="mt-5">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
          <div className="lg:w-96">
            <img src="./images/icon-sleep.svg" alt="icon-eating" />
            <p className="mt-5 text-xl font-semibold text-gunmetal">
              Healthy eating
            </p>
            <p className="mt-5">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="text-center lg:w-screen">
          <h3 className="mt-10 text-3xl text-gunmetal font-semibold">
            Limitations of BMI
          </h3>
          <p className="mt-5 p-5 md:w-grande md:m-auto">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-96 p-5">
            <div className="p-5 shadow-xl shadow-gray-300 flex flex-col gap-5">
              <p className="flex items-center gap-5 text-gunmetal font-semibold text-xl">
                <img
                  src="./images/icon-gender.svg"
                  alt="Gender"
                  className="inline"
                />
                Gender
              </p>
              <p>
                The development and body fat composition of girls and boys vary
                with age. Consequently, a childs age and gender are considered
                when evaluating their BMI.
              </p>
            </div>
          </div>
          <div className="w-full md:w-96 p-5 m-auto">
            <div className="p-5  shadow-xl shadow-gray-300 flex flex-col gap-5">
              <p className="flex items-center gap-5 text-gunmetal font-semibold text-xl">
                <img src="./images/icon-age.svg" alt="Age" className="inline" />
                Age
              </p>
              <p>
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>
          </div>
          <div className="w-full md:w-96 p-5 m-auto">
            <div className="p-5 shadow-xl shadow-gray-300 flex flex-col gap-5">
              <p className="flex items-center gap-5 text-gunmetal font-semibold text-xl">
                <img
                  src="./images/icon-muscle.svg"
                  alt="Muscle"
                  className="inline"
                />
                Muscle
              </p>
              <p>
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn t differentiate muscle from fat.
              </p>
            </div>
          </div>
          <div className="w-full md:w-96 p-5 m-auto">
            <div className="p-5 shadow-xl shadow-gray-300 flex flex-col gap-5">
              <p className="flex items-center gap-5 text-gunmetal font-semibold text-xl">
                <img
                  src="./images/icon-pregnancy.svg"
                  alt="Pregnancy"
                  className="inline"
                />
                Pregnancy
              </p>
              <p>
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </div>
          </div>
          <div className="w-full md:w-96 p-5 m-auto">
            <div className="p-5 shadow-xl shadow-gray-300 flex flex-col gap-5">
              <p className="flex items-center gap-5 text-gunmetal font-semibold text-xl">
                <img
                  src="./images/icon-race.svg"
                  alt="Race"
                  className="inline"
                />
                Race
              </p>
              <p>
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
