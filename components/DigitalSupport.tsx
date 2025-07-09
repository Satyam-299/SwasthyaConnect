
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useUpload } from '@/hooks/useUpload';
import { useToast } from '@/hooks/use-toast';
import { storage } from '@/lib/firebase';
import { ref, listAll, getDownloadURL, deleteObject } from 'firebase/storage';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { LogIn, UploadCloud, FileText, Download, Trash2, LoaderCircle, ServerCrash } from 'lucide-react';

type UploadedFile = {
  name: string;
  url: string;
};

export default function DigitalSupport() {
  const { user, loading: authLoading } = useAuth();
  const { progress, downloadURL, error: uploadError, isUploading, uploadFile } = useUpload();
  const { toast } = useToast();
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const fetchFiles = async () => {
    if (!user || !storage) return;
    setIsLoadingFiles(true);
    try {
      const userFilesRef = ref(storage, `medical-records/${user.uid}`);
      const res = await listAll(userFilesRef);
      const files = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { name: itemRef.name, url };
        })
      );
      setUploadedFiles(files);
    } catch (error) {
      console.error("Error fetching files:", error);
      toast({ variant: 'destructive', title: 'Could not fetch files.' });
    } finally {
      setIsLoadingFiles(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (downloadURL) {
      toast({ title: 'Upload Successful!', description: `${selectedFile?.name} has been uploaded.` });
      fetchFiles(); // Refresh file list after successful upload
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
    if (uploadError) {
      toast({ variant: 'destructive', title: 'Upload Failed', description: uploadError.message });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloadURL, uploadError]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  };
  
  const handleDelete = async (fileName: string) => {
    if(!user || !storage) return;
    if(!confirm(`Are you sure you want to delete ${fileName}? This action cannot be undone.`)) return;

    setIsDeleting(fileName);
    try {
        const fileRef = ref(storage, `medical-records/${user.uid}/${fileName}`);
        await deleteObject(fileRef);
        toast({ title: "File Deleted", description: `${fileName} has been removed.`});
        fetchFiles();
    } catch(error) {
        console.error("Error deleting file:", error);
        toast({ variant: "destructive", title: "Deletion failed"});
    } finally {
        setIsDeleting(null);
    }
  }

  if (authLoading) {
    return <div className="flex justify-center items-center h-full"><LoaderCircle className="h-8 w-8 animate-spin" /></div>;
  }

  if (!user) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <Card className="max-w-md p-6">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please log in to manage your medical records.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Digital Medical Records</h1>
      <p className="text-muted-foreground mb-8">Securely upload and manage your health documents.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Upload a New Document</CardTitle>
            <CardDescription>Select a file (PDF, PNG, JPG) to upload.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.png,.jpg,.jpeg" />
            {isUploading && <Progress value={progress} className="w-full" />}
            <Button onClick={handleUpload} disabled={isUploading || !selectedFile} className="w-full">
              {isUploading ? <LoaderCircle className="animate-spin mr-2" /> : <UploadCloud className="mr-2 h-4 w-4" />}
              {isUploading ? `Uploading... ${Math.round(progress)}%` : 'Upload File'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Uploaded Records</CardTitle>
            <CardDescription>View and download your documents.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingFiles ? (
              <div className="flex items-center justify-center p-8">
                <LoaderCircle className="h-6 w-6 animate-spin" />
              </div>
            ) : uploadedFiles.length > 0 ? (
              <ul className="space-y-2">
                {uploadedFiles.map((file) => (
                  <li key={file.name} className="flex items-center justify-between rounded-md border p-3">
                    <div className="flex items-center gap-3 truncate">
                      <FileText className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="truncate" title={file.name}>{file.name}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild variant="ghost" size="icon">
                        <a href={file.url} target="_blank" rel="noopener noreferrer">
                          <Download className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(file.name)} disabled={isDeleting === file.name}>
                        {isDeleting === file.name ? <LoaderCircle className="animate-spin h-5 w-5" /> : <Trash2 className="h-5 w-5" />}
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
                <div className="text-center text-muted-foreground p-8">
                    <ServerCrash className="h-8 w-8 mx-auto mb-2" />
                    <p>No records found.</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
