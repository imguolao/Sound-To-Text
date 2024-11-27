// import { useState } from 'react'
import UploadIcon from '@mui/icons-material/Upload'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

interface InputFileUploadProps {
  onFileSelect?: (files: FileList) => void
  multiple?: boolean
  accept?: string
}

export default function InputFileUpload({
  multiple,
  accept,
  onFileSelect,
}: InputFileUploadProps) {
  // const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files?.length) {
      // setSelectedFiles(files)
      onFileSelect?.(files)
    }
  }

  return (
    <Button
      component="label"
      role="button"
      variant="contained"
      tabIndex={-1}
      startIcon={<UploadIcon />}
    >
      Upload Audio files
      <VisuallyHiddenInput
        type="file"
        accept={accept ?? '*'}
        onChange={handleFileChange}
        multiple={multiple ?? false}
      />
    </Button>
  )
}
