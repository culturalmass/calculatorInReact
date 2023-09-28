import { BsBackspace } from "react-icons/bs";
import { TbMath, TbPlusMinus } from "react-icons/tb";
import { CgMathDivide } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { CgMathMinus, CgMathPlus, CgMathEqual } from "react-icons/cg";
import style from "../styles";

const characterCal = [
  { pos: 1, type: "s", symb: "%" },
  { pos: 2, type: "s", symb: "CE" },
  { pos: 3, type: "s", symb: "C" },
  { pos: 4, type: "s", symb: <BsBackspace className={style.icons} /> },
  { pos: 5, type: "s", symb: "1/x" },
  {
    pos: 6,
    type: "s",
    symb: (
      <div>
        x<sup>2</sup>
      </div>
    ),
  },
  { pos: 7, type: "s", symb: <TbMath className={style.icons} /> },
  { pos: 8, type: "s", symb: <CgMathDivide className={style.icons} /> },
  { pos: 9, type: "n", symb: "7" },
  { pos: 10, type: "n", symb: "8" },
  { pos: 11, type: "n", symb: "9" },
  { pos: 12, symb: <AiOutlineClose className={style.icons} /> },
  { pos: 13, type: "n", symb: "4" },
  { pos: 14, type: "n", symb: "5" },
  { pos: 15, type: "n", symb: "6" },
  { pos: 16, symb: <CgMathMinus className={style.icons} /> },
  { pos: 17, type: "n", symb: "1" },
  { pos: 18, type: "n", symb: "2" },
  { pos: 19, type: "n", symb: "3" },
  { pos: 20, symb: <CgMathPlus className={style.icons} /> },
  { pos: 21, symb: <TbPlusMinus className={style.icons} /> },
  { pos: 22, type: "n", symb: "0" },
  { pos: 23, type: "s", symb: "." },
  { pos: 24, type: "s", symb: <CgMathEqual className={style.icons} /> },
];

export default characterCal;
