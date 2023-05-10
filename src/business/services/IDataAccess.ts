export interface IDataAccess {
    getUserByCredentiales(id: string, pass: string): Promise<object>
    getItems(collectionName: string): Promise<any[]>;
    getOneItem(collectionName: string, id: string): Promise<any>;
    deleteItem(collectionName: string, id: string): Promise<any>;
    createItem(collectionName: string, payload: Object): Promise<any>;
    updateItem(collectionName: string, id: string, payload: Object): Promise<any>;
}