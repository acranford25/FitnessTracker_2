import { createContext, useState, useEffect } from "react";
import { getRoutine } from "../../api/routines";
import { useParams } from "react-router-dom";

export const RoutineContext = createContext();

const RoutineProvider = ({ children }) => {
  const [routine, setRoutine] = useState({});
  const [activities, setActivities] = useState([]);
  const { routineId } = useParams();

  useEffect(() => {
    async function getRoutine() {
      try {
        const result = await getRoutine(routineId);

        setRoutine(result.routine);
        setActivities(result.activities);
      } catch (error) {
        console.error(error);
      }
    }
    getRoutine();
  }, [routineId]);

  const contextValue = {
    routine,
    setRoutine,
    activities,
    setActivities,
  };

  return (
    <RoutineContext.Provider value={contextValue}>
      {children}
    </RoutineContext.Provider>
  );
};

export default RoutineProvider;
