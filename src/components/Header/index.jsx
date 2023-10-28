const Header = () => {
  return (
    <>
      <header className="p-5 text-center flex flex-col gap-10 bg-color-fondo pb-52    ">
        <img
          src="./images/logo.svg"
          alt="logoHeader"
          width={40}
          className="m-auto lg:m-5 lg:w-16 gatito "
        />
        <h1 className="m-auto text-4xl font-bold text-h leading-10 w-52 md:w-72 text-gunmetal lg:m-0 lg:text-start lg:text-5xl  lg:w-grande">
          Body Mass Index Calculator
        </h1>
        <p className="text-dark-electric-blue lg:text-start lg:w-grande ">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </header>
    </>
  );
};

export default Header;
