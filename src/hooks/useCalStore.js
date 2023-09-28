import { useDispatch, useSelector } from "react-redux";
import { onUpdate } from "../store";

export const useCalStore = () => {
  const dispatch = useDispatch();
  const { cal } = useSelector((state) => state.cal);

  const startClearCurrent = () => {
    dispatch(
      onUpdate({
        cal: {
          displayA: 0,
          displayB: cal.displayB,
          currentA: 0,
          currentB: cal.displayB !== "" ? 0 : cal.currentB,
          operation: cal.operation,
          equal: cal.equal,
        },
      })
    );
  };

  const startClearCalculator = () => {
    dispatch(
      onUpdate({
        cal: {
          displayA: 0,
          displayB: "",
          currentA: 0,
          currentB: 0,
          operation: "none",
          equal: { repeat: false, currentResult: 0, operation: "none" },
        },
      })
    );
  };

  const startBackspace = () => {
    let prop3;
    let prop4;
    if (cal.operation === "none") {
      prop3 =
        cal.currentA.length <= 1
          ? 0
          : cal.currentA.length === undefined
          ? 0
          : cal.currentA.slice(0, cal.currentA.length - 1);
      prop4 = cal.currentB;
    } else {
      prop3 = cal.currentA;
      prop4 =
        cal.currentB.length <= 1
          ? 0
          : cal.currentB.length === undefined
          ? 0
          : cal.currentB.slice(0, cal.currentB.length - 1);
    }
    dispatch(
      onUpdate({
        cal: {
          displayA:
            cal.operation === "none"
              ? Number(prop3).toLocaleString()
              : Number(prop4).toLocaleString(),
          displayB: cal.displayB,
          currentA: prop3,
          currentB: prop4,
          operation: cal.operation,
          equal: { repeat: false, currentResult: 0, operation: "none" },
        },
      })
    );
  };

  const startClearOperation = () => {
    dispatch(
      onUpdate({
        cal: {
          displayA: 0,
          displayB: cal.displayB,
          currentA: 0,
          currentB: 0,
          operation: cal.operation,
          equal: { repeat: false, currentResult: 0, operation: "none" },
        },
      })
    );
  };

  const startMemoryCount = (data) => {
    let prop1;
    let prop2;
    let prop3;
    let prop4;
    let prop5;
    if (
      (cal.currentA.length === 16 && cal.operation === "none") ||
      cal.currentB.length === 16
    ) {
      return;
    }
    if (cal.currentA !== 0 && cal.operation === "none") {
      prop1 = Number(
        cal.currentA.toString() + data.toString()
      ).toLocaleString();
      prop2 = "";
      prop3 = cal.currentA.toString() + data.toString();
      prop4 = 0;
      prop5 = cal.operation;
    } else if (cal.currentA === 0 && cal.operation === "none") {
      prop1 = data.toLocaleString();
      prop2 = "";
      prop3 = data;
      prop4 = 0;
      prop5 = cal.operation;
    } else if (
      cal.currentA !== 0 &&
      (cal.operation === "1/x" ||
        cal.operation === "x^2" ||
        cal.operation === "√")
    ) {
      prop1 = data.toString();
      prop2 = "";
      prop3 = data.toString();
      prop4 = cal.currentB;
      prop5 = cal.operation;
    } else if (cal.currentB !== 0 && cal.operation !== "none") {
      prop1 = Number(
        cal.currentB.toString() + data.toString()
      ).toLocaleString();
      prop2 = cal.displayB;
      prop3 = cal.currentA;
      prop4 = cal.currentB + data.toString();
      prop5 = cal.operation;
    } else if (cal.currentB === 0 && cal.operation !== "none") {
      prop1 = data.toLocaleString();
      prop2 = cal.displayB;
      prop3 = cal.currentA;
      prop4 = data;
      prop5 = cal.operation;
    }
    dispatch(
      onUpdate({
        cal: {
          displayA: prop1,
          displayB: prop2,
          currentA: prop3,
          currentB: prop4,
          operation: prop5,
          equal: { repeat: false, currentResult: 0, operation: "none" },
        },
      })
    );
  };

  const startOperationStep = (data) => {
    if (cal.equal.repeat) {
      dispatch(
        onUpdate({
          cal: {
            displayA: cal.equal.currentResult,
            displayB: cal.equal.currentResult + data,
            currentA: cal.equal.currentResult,
            currentB: 0,
            operation: data,
            equal: { repeat: false, currentResult: 0, operation: "none" },
          },
        })
      );
    } else {
      startClearOperation();
      dispatch(
        onUpdate({
          cal: {
            displayA: 0,
            displayB: cal.currentA + data,
            currentA: cal.currentA,
            currentB: cal.currentB,
            operation: data,
            equal: { repeat: false, currentResult: 0, operation: "none" },
          },
        })
      );
    }
  };

  const startResolver = () => {
    let result = 0;
    if (cal.equal.repeat) {
      switch (true) {
        case cal.equal.operation === "÷":
          result = Number(cal.equal.currentResult) / Number(cal.currentB);
          break;
        case cal.equal.operation === "x":
          result = Number(cal.equal.currentResult) * Number(cal.currentB);
          break;
        case cal.equal.operation === "-":
          result = Number(cal.equal.currentResult) - Number(cal.currentB);
          break;
        case cal.equal.operation === "+":
          result = Number(cal.equal.currentResult) + Number(cal.currentB);
          break;
        case cal.equal.operation === "none":
          result = Number(cal.equal.currentResult);
          break;
      }
    } else {
      switch (true) {
        case cal.operation === "÷":
          result = Number(cal.currentA) / Number(cal.currentB);
          break;
        case cal.operation === "x":
          result = Number(cal.currentA) * Number(cal.currentB);
          break;
        case cal.operation === "-":
          result = Number(cal.currentA) - Number(cal.currentB);
          break;
        case cal.operation === "+":
          result = Number(cal.currentA) + Number(cal.currentB);
          break;
        case cal.operation === "none":
          result = Number(cal.currentA);
          break;
      }
    }
    dispatch(
      onUpdate({
        cal: {
          displayA: result.toLocaleString(),
          displayB:
            cal.operation === "none"
              ? cal.equal.repeat === true
                ? cal.displayA + cal.equal.operation + cal.currentB + "="
                : cal.currentA + "="
              : cal.displayB + cal.currentB + "=",
          currentA: 0,
          currentB: cal.currentB,
          operation: "none",
          equal: {
            repeat: true,
            currentResult: result,
            operation:
              cal.operation !== "none" ? cal.operation : cal.equal.operation,
          },
        },
      })
    );
  };

  const startBtnSolver = (data) => {
    if (data.type === "n") {
      startMemoryCount(data.symb);
    } else {
      switch (true) {
        case data.pos === 1:
          dispatch(
            onUpdate({
              cal: {
                displayA: (
                  cal.currentB *
                  (cal.displayB.slice(0, cal.displayB.length - 1) / 100)
                ).toString(),
                displayB: cal.displayB.toString(),
                currentA: cal.currentA,
                currentB:
                  cal.currentB *
                  (cal.displayB.slice(0, cal.displayB.length - 1) / 100),
                operation: cal.operation,
                equal: { repeat: false, currentResult: 0, operation: "none" },
              },
            })
          );
          break;
        case data.pos === 2:
          startClearCurrent();
          break;
        case data.pos === 3:
          startClearCalculator();
          break;
        case data.pos === 4:
          startBackspace();
          break;
        case data.pos === 5:
          dispatch(
            onUpdate({
              cal: {
                displayA: 1 / cal.currentA,
                displayB: "1/" + cal.currentA.toString(),
                currentA: 1 / cal.currentA,
                currentB: 0,
                operation: "1/x",
                equal: { repeat: false, currentResult: 0, operation: "none" },
              },
            })
          );
          break;
        case data.pos === 6:
          dispatch(
            onUpdate({
              cal: {
                displayA: Math.pow(cal.currentA, 2),
                displayB: cal.currentA.toString() + "^2",
                currentA: Math.pow(cal.currentA, 2),
                currentB: 0,
                operation: "x^2",
                equal: { repeat: false, currentResult: 0, operation: "none" },
              },
            })
          );
          break;
        case data.pos === 7:
          dispatch(
            onUpdate({
              cal: {
                displayA: Math.sqrt(cal.currentA),
                displayB: "√" + cal.currentA.toString(),
                currentA: Math.sqrt(cal.currentA),
                currentB: 0,
                operation: "√",
                equal: { repeat: false, currentResult: 0, operation: "none" },
              },
            })
          );
          break;
        case data.pos === 8:
          startOperationStep("÷");
          break;
        case data.pos === 12:
          startOperationStep("x");
          break;
        case data.pos === 16:
          startOperationStep("-");
          break;
        case data.pos === 20:
          startOperationStep("+");
          break;
        case data.pos === 21:
          startMemoryCount("-");
          break;
        case data.pos === 23:
          startMemoryCount(data.symb);
          break;
        case data.pos === 24:
          startResolver();
          break;
      }
    }
  };

  return {
    cal,
    startBtnSolver,
  };
};
