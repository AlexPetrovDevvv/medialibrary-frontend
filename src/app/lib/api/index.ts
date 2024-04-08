import instance from "../../../shared/lib/api/instance";
import axiosAuth from "./axiosAuth";
// import axiosUsers from "./axiosUsers";

export default {
    auth: axiosAuth(instance),
    // users: axiosUsers(instance)
}