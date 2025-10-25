import conf from '../conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // ✅ Account creation
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                // ✅ login automatically after signup
                return await this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error("Create account error:", error);
            throw error;
        }
    }

    // ✅ Login function fixed
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }

    // ✅ Logout function (optional)
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Logout error:", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;




