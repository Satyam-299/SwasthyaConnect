
'use client';

import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, type UploadTask } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';

export function useUpload() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<number>(0);
  const [downloadURL, setDownloadURL] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const uploadFile = (file: File) => {
    if (!user) {
      setError(new Error("User is not authenticated."));
      return;
    }
    if (!storage) {
      setError(new Error("Firebase Storage is not configured."));
      return;
    }

    const storageRef = ref(storage, `medical-records/${user.uid}/${file.name}`);
    const uploadTask: UploadTask = uploadBytesResumable(storageRef, file);

    setIsUploading(true);
    setError(null);
    setProgress(0);
    setDownloadURL(null);

    uploadTask.on('state_changed',
      (snapshot) => {
        const currentProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(currentProgress);
      },
      (uploadError) => {
        setError(uploadError);
        setIsUploading(false);
      },
      async () => {
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setDownloadURL(url);
        } catch (urlError) {
          setError(urlError as Error);
        } finally {
          setIsUploading(false);
        }
      }
    );
  };

  return { progress, downloadURL, error, isUploading, uploadFile };
}
