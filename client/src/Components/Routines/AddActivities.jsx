import { patchRoutine } from "../../api/routines";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { getRoutine } from "../../api/routines";
import { getActivities } from "../../api/activities";
import { useState, useEffect } from "react";
import DropDown from "../Activities/DropDown";

export default function AddActivties({ routine, handleSubmit }) {
  const { routineId } = useParams();
  const { user } = useAuth();

  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({});
  const [allActivities, setAllActivities] = useState([]);

  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [is_public, setIs_public] = useState();
  const [thisRoutine, setThisRoutine] = useState({});

  useEffect(() => {
    async function getGetActivities() {
      const result = await getActivities();
      setAllActivities(result.activities);
      console.log("all activities", result.activities);

      setName(routine.name);
      setGoal(routine.goal);
      setIs_public(routine.is_public);
      if (activity.name) {
        routine.activities.push(activity);
      }
      setThisRoutine(routine);
      setActivities(routine.activities);
    }
    getGetActivities();
  }, [activity]);

  /*useEffect(() => {
    async function addActivities() {
      const result = await patchRoutine(routineId, name, goal, true);

      result.activities = thisRoutine.activities;
      return result;
    }
    addActivities();
  }, [activity]);*/

  function handleChange(e) {
    setActivity(JSON.parse(e.target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await patchRoutine(routineId, name, goal, is_public);

      result.activities = thisRoutine.activities;
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <DropDown allActivities={allActivities} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
