import conf from "../conf/conf.js"
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProductId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredimage,status,userId}) {
        try {
            return await this.databases.createDocument({
                databaseId:conf.appwtiteDatabaseId,
                collectionId:conf.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId
                }
            })
            
        } catch (error) {
            console.log("Appwrite server :: create post :: error",error)
        }
    }

    async updatePost(slug, { title, content, featuredimage, status, userId }) {
        try {
           return await databases.updateDocument({
                databaseId: conf.appwtiteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId
                }
            })
        } catch (error) {
            console.log("Appwrite server :: update post :: error", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument({
                databaseId: conf.appwtiteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
            })
            return true;
        } catch (error) {
            console.log("Appwrite server :: delete post :: error", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument({
                databaseId: conf.appwtiteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
            })
        } catch (error) {
            console.log("Appwrite server :: get post :: error", error);
        }
    }

    async getPosts() {
        try {
            return await this.databases.listDocuments({
                databaseId: conf.appwtiteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                queries:[]
            })
        } catch (error) {
            
        }
    }
}

const service = new Service();

export default service;

