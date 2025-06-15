
import { supabase } from '@/integrations/supabase/client';

export interface FileUploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export const uploadFile = async (
  file: File,
  bucket: string,
  path: string
): Promise<FileUploadResult> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${path}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    return { success: true, url: publicUrl };
  } catch (error) {
    console.error('File upload error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Upload failed' 
    };
  }
};

export const validateFile = (file: File, maxSizeMB: number = 10): string | null => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  ];

  if (!allowedTypes.includes(file.type)) {
    return 'Please upload a PDF, Word document, or PowerPoint presentation.';
  }

  if (file.size > maxSizeMB * 1024 * 1024) {
    return `File size must be less than ${maxSizeMB}MB.`;
  }

  return null;
};
