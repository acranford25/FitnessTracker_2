import { useContext } from "react";
import { RoutineContext } from "../Components/Routines/RoutineProvider";

const useRout = () => {
  return useContext(RoutineContext);
};

export default useRout;
