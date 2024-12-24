import AddIcon from '@mui/icons-material/Add'
import { styled } from '@mui/material/styles'
import { open, OpenDialogOptions } from '@tauri-apps/plugin-dialog'

const VisuallyButton = styled('div')({
  borderRadius: '4px',
  border: '2px dashed rgba(28, 32, 35, 0.08)',
  width: '100%',
  padding: '12px',
  backgroundColor: 'rgba(249, 249, 249, 1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
})

interface FileUploadProps {
  onFileSelect?: (fileNames: string[]) => void
  multiple?: boolean
  filters?: OpenDialogOptions['filters']
  tips?: string
  acceptTips?: string
}

export default function FileUpload({
  multiple,
  filters,
  onFileSelect,
  tips = 'Click to select file or drag and drop the file here',
  acceptTips = 'Accepted any type of file',
}: FileUploadProps) {
  const handleButtonClick = async () => {
    const selectedFiles = await open({
      multiple,
      directory: false,
      filters,
      // filters: [{
      //     name: 'Audio',
      //     extensions: ['mp3', 'wav'],
      // }],
    })

    if (selectedFiles) {
      onFileSelect?.(
        Array.isArray(selectedFiles)
          ? selectedFiles
          : [selectedFiles],
      )
    }
  }

  return (
    <VisuallyButton
      role="button"
      tabIndex={0}
      onClick={handleButtonClick}
    >
      <AddIcon />
      <span>{tips}</span>
      <span>{acceptTips}</span>
    </VisuallyButton>
  )
}
