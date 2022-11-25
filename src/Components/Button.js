import { useContext } from "react";
import { CalContext } from "../Context/CalContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    'x': "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalContext);

  // User Click comma

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  // User Click C (Clear)

  const restClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  // User Click Number

  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;

    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // user Click operators

  const signClick = () => {
    setCalc({
      sign: value,
      num: 0,
      res: !calc.res && calc.num ? calc.num : CalContext.res,
    });
  };

  // user Click equalClick
  const equalClick = () => {
    if (calc.res && calc) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          'x': (a, b) => a * b,
          "-": (a, b) => a - b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
    
  };

  // user Click persenClick

   const persenClick = () =>{
    setCalc({
      num: (calc.num / 100),
      res: (calc.num / 100),
      sign: "",
      
    });
   }

  //  user Click invertClick

const invertClick = () => {
  setCalc({
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: "",
    
  });
}

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      'C': restClick,
      "/": signClick,
      'x': signClick,
      "+": signClick,
      "-": signClick,
      "=": equalClick,
      "%": persenClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
