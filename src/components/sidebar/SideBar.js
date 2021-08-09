import "../../styles/sidebar/sidebar.css";
import Filter from "./filter/Filter";
import SearchBar from "./search/SearchBar";
import TaskList from "./tasklist/TaskList";
import { DataContext, FilterContext } from "../../contexts/SidebarContext";
import { useState } from "react";

const SideBar = () => {
    const [filterVisible, setFilterVisible] = useState(false);
    const [filteredPersons, setFilteredPersons] = useState(new Set());
    const [filteredPriorities, setFilteredPriorities] = useState(new Set());
    const [filteredStatuses, setFilteredStatuses] = useState(new Set());
    const [tasks, setTasks] = useState([
        {
            name: "Derash Testing Follow Up",
            description:
                "Derash Testing Follow Ups Description is going to go here. This is the issue description. It is the issue description. Yes, it is. ",
            dueDate: "08/07/2021",
            priority: "high",
            status: "Active",
            persons: [
                {
                    name: "Kaleb Misgana",
                    leader: true,
                },
                {
                    name: "Munir Haji",
                    leader: false,
                },
                {
                    name: "Yahya Haji",
                    leader: false,
                },
                {
                    name: "Hanan Fati",
                    leader: false,
                },
            ],
        },
        {
            name: "Derash Testing Follow Up",
            description:
                "Derash Testing Follow Ups Description is going to go here. This is the issue description. It is the issue description. Yes, it is. ",
            dueDate: "08/07/2021",
            priority: "mid",
            status: "Done",
            persons: [
                {
                    name: "Kaleb Misgana",
                    leader: true,
                },
                {
                    name: "Munir Haji",
                    leader: false,
                },
                {
                    name: "Yahya Haji",
                    leader: false,
                },
                {
                    name: "Hanan Fati",
                    leader: false,
                },
            ],
        },
        {
            name: "Derash Testing Follow Up",
            description:
                "Derash Testing Follow Ups Description is going to go here. This is the issue description. It is the issue description. Yes, it is. ",
            dueDate: "08/07/2021",
            priority: "low",
            status: "Cancelled",
            persons: [
                {
                    name: "Kaleb Misgana",
                    leader: true,
                },
                {
                    name: "Munir Haji",
                    leader: false,
                },
                {
                    name: "Yahya Haji",
                    leader: false,
                },
                {
                    name: "Hanan Fati",
                    leader: false,
                },
            ],
        },
        {
            name: "Derash Testing Follow Up",
            description:
                "Derash Testing Follow Ups Description is going to go here. This is the issue description. It is the issue description. Yes, it is. ",
            dueDate: "08/07/2021",
            priority: "mid",
            status: "Done",
            persons: [
                {
                    name: "Kaleb Misgana",
                    leader: true,
                },
                {
                    name: "Munir Haji",
                    leader: false,
                },
                {
                    name: "Yahya Haji",
                    leader: false,
                },
                {
                    name: "Hanan Fati",
                    leader: false,
                },
            ],
        },
        {
            name: "Derash Testing Follow Up",
            description:
                "Derash Testing Follow Ups Description is going to go here. This is the issue description. It is the issue description. Yes, it is. ",
            dueDate: "08/07/2021",
            priority: "high",
            status: "Active",
            persons: [
                {
                    name: "Kaleb Misgana",
                    leader: true,
                },
                {
                    name: "Munir Haji",
                    leader: false,
                },
                {
                    name: "Yahya Haji",
                    leader: false,
                },
                {
                    name: "Hanan Fati",
                    leader: false,
                },
            ],
        },
    ]);

    return (
        <FilterContext.Provider
            value={{
                filterVisible,
                setFilterVisible,
                filteredPersons,
                setFilteredPersons,
                filteredPriorities,
                setFilteredPriorities,
                filteredStatuses,
                setFilteredStatuses,
            }}
        >
            <DataContext.Provider value={{ tasks, setTasks }}>
                <div id="sidebar">
                    <SearchBar />
                    <Filter />
                    <TaskList />
                </div>
            </DataContext.Provider>
        </FilterContext.Provider>
    );
};

export default SideBar;