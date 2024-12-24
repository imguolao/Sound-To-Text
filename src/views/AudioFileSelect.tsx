import { useState } from 'react'
import FileUpload from '../components/FileUpload'

export default function AudioFileSelect() {
  const [selectedFiles, setSelectedFiles] = useState<string[] | null>(null)

  const handleFilesChange = (files: string[]) => {
    setSelectedFiles(files)
    console.log(files)
  }

  return (
    <>
      <FileUpload
        multiple
        acceptTips="Accepted mp3,wav files"
        filters={[{
          name: 'Audio',
          extensions: ['mp3', 'wav'],
        }]}
        onFileSelect={handleFilesChange}
      />
      <div>
        {selectedFiles?.length
          ? selectedFiles.map(fileName => <div key={fileName}>{fileName}</div>)
          : null}
      </div>
    </>
  )
}
