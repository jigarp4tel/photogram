import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    //https://firebase.google.com/docs/storage/web/upload-files           <--- REFERENCE 
    //https://firebase.google.com/docs/firestore/quickstart

    useEffect(() => {

        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');


        storageRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            setProgress(percentage);

        }, (err) => {
            setError(err)
        }, async () => {
            const downloadUrl = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url: downloadUrl, createdAt, })
            setUrl(downloadUrl);
        }
        )
    }, [file]);

    return { progress, url, error }
}

export default useStorage;