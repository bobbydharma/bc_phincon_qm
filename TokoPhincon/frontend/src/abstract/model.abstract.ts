/* eslint-disable @typescript-eslint/no-explicit-any */
export default abstract class ModelAPI {
    abstract getById(id: number): Promise<any>;
    abstract getAll(): Promise<any>;
    abstract create(user: any): Promise<any>;
    abstract update(id: number, user: any): Promise<any>;
    abstract delete(id: number): Promise<any>;
}