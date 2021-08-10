import React, { useContext } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { GlobalContext } from "../../../contexts/GlobalContext";
import InfoContainer from "../InfoContainer";
import TrackList from "./TrackList";

const TrackInfo = () => {
    const { selectedTask } = useContext(GlobalContext);

    return selectedTask ? (
        <div className="container">
            <h2 className="title">Tracks Info</h2>
            <form action="/" method="post">
                <InfoContainer
                    label="Date"
                    htmlFor="track_info_id"
                    info_render={
                        <input id="track_info_id" type="date" name="date" />
                    }
                />
                <InfoContainer
                    label="Track"
                    htmlFor="track_title"
                    info_render={
                        <input
                            id="track_title"
                            type="text"
                            name="title"
                            placeholder="Title"
                        />
                    }
                />
                <InfoContainer
                    label="Description"
                    htmlFor="track_description"
                    info_render={
                        <textarea
                            id="track_description"
                            name="description"
                            placeholder="Description"
                        ></textarea>
                    }
                />
                <button
                    type="submit"
                    className="btn btn-submit"
                    onClick={(e) => e.preventDefault()}
                >
                    <MdAddCircleOutline className="btn_icon" /> Accept
                </button>
            </form>
            <div className="track_list_container">
                <h4>List of all Tracks</h4>
                <TrackList />
            </div>
        </div>
    ) : (
        <div>No Task Selected</div>
    );
};

export default TrackInfo;
