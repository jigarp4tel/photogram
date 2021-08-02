import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    //https://firebase.google.com/docs/firestore/query-data/listen  <-- Documetation

    useEffect(() => {

        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                let documents = [];
                snapshot.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents);
            });

        return () => unsub();


    }, [collection])

    return { docs };
}

export default useFirestore;