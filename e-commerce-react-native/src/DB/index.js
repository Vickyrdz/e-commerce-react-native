import * as SQLite from 'expo-sqlite'; 

const db = SQLite.openDatabase('session.db'); 

export const init = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, tokenId TEXT NOT NULL)',
            [],
            ()=> resolve(),
            (_,error)=> {reject(error)})
        })
    })
    return promise;
}; 


export const insertSession = (data) => {
    if (!data) return;
    const { localId, email, idToken } = data;
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx => {
            tx.executeSql(
            'INSERT INTO sessions (localId, email, tokenId) VALUES (?, ?, ?); ',
            [email, localId, idToken],
            (_, result)=> resolve(result),
            (_,error)=> {reject(error)})
        })
    })
    return promise;
};


export const fetchSession = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx => {
            tx.executeSql(
            'SELECT * FROM sessions',
            [],
            (_, result)=> resolve(result),
            (_,error)=> {reject(error)})
        })
    })
    return promise;
}; 


export const deleteSession = (localId) => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx => {
            tx.executeSql(
            'DELETE FROM sessions WHERE localId = ?',
            [localId],
            (_, result)=> resolve(result),
            (_,error)=> {reject(error)})
        })
    })
    return promise;  
}; 