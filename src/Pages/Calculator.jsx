import { useCalStore } from "../hooks/";
import characterCal from "../components";
import style from "../styles/index";

const Calculator = () => {
  const { cal, startBtnSolver } = useCalStore();

  return (
    <>
      <div className={style.title}>
        <h1>Testing a Calculator in React</h1>
        <div className={style.wrapper}>
          <div className={style.content}>
            <div className={style.subTittle}>Calculator</div>
            <div className={style.screenContainer}>
              <div className={style.calScreenB}>{cal.displayB}</div>
              <div className={style.calScreenA}>{cal.displayA}</div>
            </div>
            {/* starMap */}
            <div className={style.btnWrapper}>
              {characterCal.map((s) => (
                <div
                  key={s.pos}
                  className={s.pos !== 24 ? style.btn : style.equalBtn}
                  onClick={() => {
                    startBtnSolver(s);
                  }}
                >
                  {s.symb}
                </div>
              ))}
            </div>
            {/* EndMap */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
