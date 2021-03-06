import toast from "react-hot-toast";
import axios from "axios";

// require("dotenv").config();
import env from "../../.env.json";

export const Capitalize = (word) => {
    word = word.toLowerCase();
    word = word[0].toUpperCase() + word.substr(1);
    return word;
};

export const DeepCopy = (object) => {
    if (object) {
        return JSON.parse(JSON.stringify(object));
    }
    return object;
};

export const GetToday = () => {
    const date = new Date();
    const dateString = date.toISOString().substr(0, 10);
    return dateString;
};

export const mapTaskPersonToPerson = (taskPeople) => {
    return taskPeople.map((taskPerson) => taskPerson.person);
};

export const compareTask = (task1, task2, taskSortOrder) => {
    let titleAscendingOrder = task1.issue.localeCompare(task2.issue);
    let deadlineAscendingOrder =
        new Date(task1.dueDate) - new Date(task2.dueDate);
    let addedDateAscendingOrder =
        new Date(task1.addedDate) - new Date(task2.addedDate);

    const priorityIndex = { high: 2, medium: 1, low: 0 };
    let priorityAscendingOrder =
        priorityIndex[task1.priority.toLowerCase()] -
        priorityIndex[task2.priority.toLowerCase()];
    const descFactor = taskSortOrder.order.toLowerCase() === "desc" ? -1 : 1;
    if (taskSortOrder.by.toLowerCase() === "title") {
        return (
            (titleAscendingOrder ||
                deadlineAscendingOrder ||
                addedDateAscendingOrder ||
                priorityAscendingOrder) * descFactor
        );
    } else if (taskSortOrder.by.toLowerCase() === "dueDate".toLowerCase()) {
        return (
            (deadlineAscendingOrder ||
                titleAscendingOrder ||
                addedDateAscendingOrder ||
                priorityAscendingOrder) * descFactor
        );
    } else if (taskSortOrder.by.toLowerCase() === "priority") {
        return (
            (priorityAscendingOrder ||
                titleAscendingOrder ||
                deadlineAscendingOrder ||
                addedDateAscendingOrder) * descFactor
        );
    } else {
        return (
            (addedDateAscendingOrder ||
                titleAscendingOrder ||
                deadlineAscendingOrder ||
                priorityAscendingOrder) * descFactor
        );
    }
};

export const getBaseURL = () => {
    return `${env.REACT_APP_BACKEND_BASE_URL}:${env.REACT_APP_BACKEND_BASE_PORT}${env.REACT_APP_BACKEND_API_PREFIX}`;
};

export const getTaskURL = (id = null) => {
    return `${getBaseURL()}/${env.REACT_APP_TASK_URL}${
        id !== null ? `/${id}` : ""
    }`;
};

export const getTaskExistsURL = (id) => {
    return `${getTaskURL()}/exists/${id}`;
};

export const getProfileURL = (id = null) => {
    return `${getBaseURL()}/${env.REACT_APP_PROFILE_URL}/${
        id !== null ? id : ""
    }`;
};

export const getTaskTracksURL = (taskId) => {
    return `${getTaskURL(taskId)}/tracks`;
};

export const getTracksURL = (id = null) => {
    return `${getBaseURL()}/${env.REACT_APP_TRACK_URL}/${
        id !== null ? id : ""
    }`;
};

export const getUserURL = () => {
    return `${getBaseURL()}/${env.REACT_APP_USER_URL}`;
};

export const getUserExistsURL = (username) => {
    return `${getUserURL()}/exists/${username}`;
};

export const getChangeRoleURL = (username) => {
    return `${getUserURL()}/${env.REACT_APP_USER_CHANGE_ROLE_URL}/${username}`;
};

export const getChangePasswordURL = () => {
    return `${getUserURL()}/${env.REACT_APP_CHANGE_PASSWORD_URL}`;
};

export const getUserActivateURL = (username) => {
    return `${getUserURL()}/${env.REACT_APP_USER_ACTIVATE_URL}/${username}`;
};

export const getUserDeactivateURL = (username) => {
    return `${getUserURL()}/${env.REACT_APP_USER_DEACTIVATE_URL}/${username}`;
};

export const getUserResetPassword = (username) => {
    return `${getUserURL()}/${env.REACT_APP_USER_RESET_PASSWORD_URL}`;
};

export const getUserMetaURL = (username) => {
    return `${getUserURL()}/${env.REACT_APP_USER_META_URL}/${username}`;
};

export const getLoginURL = () => {
    return `${env.REACT_APP_LOGIN_URL}`;
};

export const getCurrentUserURL = () => {
    return `${getUserURL()}/${env.REACT_APP_CURRENT_USER_URL}`;
};

export const getDepartmentURL = (id = null) => {
    return `${getBaseURL()}/${env.REACT_APP_USER_DEPARTMENT_URL}/${id || ""}`;
};

export const getRoleURL = (id = null) => {
    return `${getBaseURL()}/${env.REACT_APP_USER_ROLE_URL}/${id || ""}`;
};

export const checkUserExists = async (username) => {
    try {
        const response = await axios.get(getUserExistsURL(username));
        if (response.status === 200) {
            return response.data;
        }
    } catch (e) {
        console.error(e);
    }
    return false;
};

export const getUserByUsername = async (username) => {
    try {
        const response = await axios.get(getUserMetaURL(username));
        if (response.status === 200) {
            return response.data;
        }
    } catch (e) {
        console.error(e);
    }
    return {};
};

export const fetchingErrorHandler = (err) => {
    console.error(err);
    toast.error(
        "Something went wrong! Please make sure the server is running.",
        {
            position: "top-center",
            autoClose: 5000,
        }
    );
};

export const getRole = (name, roles) => {
    const filtered = roles.filter((role) => role.name === name);
    if (filtered.length === 0) return null;
    return filtered[0];
};

export const getDepartment = (name, departments) => {
    const filtered = departments.filter(
        (department) => department.name === name
    );
    if (filtered.length === 0) {
        return null;
    }
    return filtered[0];
};

export const fetchRoles = async () => {
    try {
        const url = getRoleURL();
        const res = await axios.get(url);
        return res.data;
    } catch (e) {
        throw e;
    }
};

export const fetchDepartments = async () => {
    try {
        const url = getDepartmentURL();
        const res = await axios.get(url);
        return res.data;
    } catch (e) {
        throw e;
    }
};
