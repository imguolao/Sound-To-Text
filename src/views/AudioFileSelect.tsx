import { useState } from 'react'
import InputFileUpload from '../components/InputFileUpload'

export default function AudioFileSelect() {
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null)

  const handleFilesChange = (files: FileList) => {
    setSelectedFiles(files?.length ? Array.from(files) : null)
    console.log(files)
  }

  return (
    <>
      <InputFileUpload
        accept="audio/mp3"
        multiple
        onFileSelect={handleFilesChange}
      />
      <div>
        {selectedFiles?.length
          ? selectedFiles.map(file => <div key={file.name}>{file.name}</div>)
          : null}
      </div>
    </>
  )
}
