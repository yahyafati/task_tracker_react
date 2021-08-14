import React, { useContext } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { QuestionDialog } from "../../helpers/Dialog";

const TrackItem = ({ track }) => {
    const { refresh, setDialog } = useContext(GlobalContext);

    const deleteTrack = () => {
        const requestOptions = {
            method: "DELETE",
        };

        const url = `http://localhost:4200/api/track/${track.id}`;
        fetch(url, requestOptions)
            .then((res) => {
                res.text();
                refresh();
                toast.success("Track has been deleted!", {
                    position: "top-center",
                    autoClose: 5000,
                });
            })
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    };
    const handleDelete = (e) => {
        e.preventDefault();
        setDialog(
            <QuestionDialog
                text="Remove Track?"
                subtext="Are you sure? This action can not be undone."
                title="Just Checking"
                onYes={deleteTrack}
                onNo={() => true}
            />
        );
    };

    return (
        <div className="track_item">
            <p className="date">{track.date}</p>
            <div className="track_head">
                <h5 className="head">{track.title}</h5>
                <MdDelete className="icon" onClick={handleDelete} />
            </div>
            <p className="description">{track.description}</p>
        </div>
    );
};

export default TrackItem;
