import React, { useEffect, useState } from "react";
import RadioButton from "../../helpers/RadioButton";
import { MdBubbleChart, MdCancel, MdCheckCircle } from "react-icons/md";
import { DeepCopy } from "../../helpers/Helper";
const StatusInfo = ({ task }) => {
    const [selectedTask, setSelectedTask] = useState(DeepCopy(task));
    const [checked, setChecked] = useState(selectedTask.status);

    // useEffect(() => {
    //     task.status = checked.toUpperCase();
    // }, [task, checked]);

    useEffect(() => {
        setSelectedTask(task);
        setChecked(task.status);
    }, [task, setSelectedTask]);

    useEffect(() => {
        setSelectedTask((currentTask) => ({
            ...currentTask,
            status: checked.toUpperCase(),
        }));
    }, [setSelectedTask, checked]);

    return (
        <div>
            <RadioButton
                id="active_status_info"
                name="status"
                render={
                    <>
                        <MdBubbleChart /> Active
                    </>
                }
                value="active"
                checked={checked.toLowerCase() === "active"}
                setChecked={setChecked}
            />
            <RadioButton
                id="done_status_info"
                name="status"
                render={
                    <>
                        <MdCheckCircle /> Done
                    </>
                }
                value="done"
                checked={checked.toLowerCase() === "done"}
                setChecked={setChecked}
            />
            <RadioButton
                id="cancelled_status_info"
                name="status"
                render={
                    <>
                        <MdCancel /> Cancelled
                    </>
                }
                value="cancelled"
                checked={checked.toLowerCase() === "cancelled"}
                setChecked={setChecked}
            />
        </div>
    );
};

export default StatusInfo;
