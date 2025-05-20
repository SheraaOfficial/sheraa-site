
import React, { useState, useRef } from 'react';
import { Upload, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FileUploaderProps {
  id: string;
  label: string;
  accept: string;
  maxSize?: number; // in MB
  required?: boolean;
  onChange: (file: File | null) => void;
  value: File | null;
  hint?: string;
}

export const SEFFileUploader: React.FC<FileUploaderProps> = ({
  id,
  label,
  accept,
  maxSize = 5,
  required = false,
  onChange,
  value,
  hint
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const validateFile = (file: File): boolean => {
    setError(null);
    
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds the maximum limit of ${maxSize}MB`);
      return false;
    }
    
    // Check file type
    const acceptedTypes = accept.split(',').map(type => type.trim());
    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
    
    const isAcceptedType = acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        return type === fileExtension;
      } else if (type.includes('/*')) {
        const mainType = type.split('/')[0];
        return file.type.startsWith(`${mainType}/`);
      } else {
        return type === file.type;
      }
    });
    
    if (!isAcceptedType) {
      setError(`File type not supported. Please upload ${acceptedTypes.join(', ')}`);
      return false;
    }
    
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setIsUploading(true);
      
      // Simulate file processing/uploading
      setTimeout(() => {
        setIsUploading(false);
        onChange(file);
      }, 1000);
    } else {
      onChange(null);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
    setError(null);
    
    // Reset the input value to allow re-uploading the same file
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const clickUpload = () => {
    inputRef.current?.click();
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="font-medium text-gray-700 flex items-center gap-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      
      <div
        onClick={clickUpload}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center relative cursor-pointer transition-all
          ${isDragging ? 'border-sheraa-primary bg-sheraa-primary/10' : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-sheraa-primary/30'}
          ${value ? 'bg-sheraa-primary/5 border-sheraa-primary/40' : ''}
          ${error ? 'border-red-400 bg-red-50' : ''}
        `}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          required={required}
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center gap-2">
          {isUploading ? (
            <Loader2 className="h-8 w-8 text-sheraa-primary animate-spin" />
          ) : value ? (
            <div className="flex items-center justify-between w-full max-w-md">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <div className="text-left">
                  <p className="font-medium text-gray-900 truncate max-w-[200px]">{value.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(value.size)}</p>
                </div>
              </div>
              <button 
                onClick={removeFile}
                type="button" 
                className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              <Upload className={`h-8 w-8 ${error ? 'text-red-400' : 'text-sheraa-primary/70'}`} />
              <p className="text-sm font-medium text-gray-700">
                Drag & drop or click to upload
              </p>
              <p className="text-xs text-gray-500">
                {accept.replace(/\./g, '').toUpperCase()} (Max. {maxSize}MB)
              </p>
            </>
          )}
        </div>
      </div>
      
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
      
      {hint && !error && (
        <p className="text-xs text-gray-500 mt-1">{hint}</p>
      )}
    </div>
  );
};
