// @ts-ignore
import React, { useState, useEffect } from 'react'
import { Box } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
  const { record } = props
  const [fileSrc, setFileSrc] = useState('');
  const [fileType, setFileType] = useState('img');

  useEffect(() => {
    setFileSrc(record.params.file);
  }, [record]);

  useEffect(() => {
    if (fileSrc.includes('.mp3') || fileSrc.includes('.wav') || fileSrc.includes('.ogg')) {
      setFileType('audio')
    }
  }, [fileSrc]);

  const renderFilePreview = () => {
    if (fileType === 'audio') {
      return <audio controls src={fileSrc} />
    } else {
      return <img src={fileSrc} width="80px"/>
    }
  }
  console.log(fileSrc)

  return (
    <Box>
      {fileSrc ? (
          renderFilePreview()
      ) : 'No file'}
    </Box>
  )
}

export default Edit
