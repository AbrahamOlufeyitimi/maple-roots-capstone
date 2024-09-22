import axios from "axios";
import { users_api_url, resources_api_url } from "../utils/config";

export class MapleRootsApi {
    constructor(navigate) {
        this.RESOURCES_URL = resources_api_url;
        this.USERS_URL = users_api_url;
        if (navigate) this.navigate = navigate;
    }

    async createUser(newUser) {
        try {
            const response = await axios.post(this.USERS_URL, newUser);
            return response.data;
        } catch (error) {
            console.error(`Error creating user: ${error}`);
        }
    }

    async getUserById(id) {
        const request = `${this.USERS_URL}/${id}`;
        try {
            const response = await axios.get(request);
            return response.data;
        } catch (error) {
            console.error(`Error fetching user ${id}: ${error}`);
            this.navigate("/");
        }
    }

    async updateUser(id, updatedUser) {
        const request = `${this.USERS_URL}/${id}`;
        try {
            const response = await axios.put(request, updatedUser);
            return response.data;
        } catch (error) {
            console.error(`Error updating user ${id}: ${error}`);
            this.navigate(`/users/${id}`);
        }
    }

    async getResources(sort_by, order_by, s) {
        const request = `${this.RESOURCES_URL}`;
        try {
            const response = await axios.get(request, {
                params: {
                sort_by: sort_by,
                order_by: order_by,
                s: s,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching resources: ", error);
        }
    }

    async getResourceById(id) {
        const request = `${this.RESOURCES_URL}/${id}`;
        try {
            const response = await axios.get(request);
            return response.data;
        } catch (error) {
            console.error(`Error fetching resource ${id}: ${error}`);
            this.navigate("/");
        }
    }

    async markResourceAsCompleted(id, updatedResource) {
        const request = `${this.RESOURCES_URL}/${id}`;
        try {
                    const response = await axios.put(request, updatedResource);
                    return response.data;
        } catch (error) {
                    console.error(`Error marking resource ${id} as completed: ${error}`);
                    this.navigate(`/resources/${id}`);
        }
    }

    async addResource(newResource) {
        try {
            const response = await axios.post(this.RESOURCES_URL, newResource);
            return response.data;
        } catch (error) {
            console.error(`Error adding a resource: ${error}`);
        }
    }


    async getAllResources({school }) {
        try {
            const response = await axios.get(this.RESOURCES_URL, {
                params: { school }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching resources: ", error);
            throw error;
        }
    }

    async deleteResource(id) {
        const request = `${this.RESOURCES_URL}/${id}`;
        try {
            await axios.delete(request);
        } catch (error) {
            console.error(`Error deleting a resource: ${error}`);
        }
    }
}
