import { useState, useCallback, useEffect } from 'react';
import { getBase64 } from '../feature/common/Form/utils';
import { message } from 'antd';
import _ from 'lodash';
export enum UploadStatus {
  EMPTY = 'empty',
  DONE = 'done',
  ERROR = 'error'
}

export const useUploadImage = (allowFile = false) => {
  const [fileList, setFileList] = useState<any>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState(UploadStatus.EMPTY);
  const onRemove = (file: any) => {
    setFileList([]);
    setFileName('');
    setStatus(UploadStatus.EMPTY);
  };
  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (isJpgOrPng || allowFile) {
      setStatus(UploadStatus.DONE);
      setFileList([file]);
    } else {
      setFileList([
        {
          uid: '-1',
          name: file.name,
          status: 'error'
        }
      ]);
      setStatus(UploadStatus.ERROR);
    }
    setFileName(file.name);

    return false;
  };

  useEffect(() => {
    console.log('something chagne');
    const getBase64Img = async () => {
      if (!_.isEmpty(fileList)) {
        try {
          const res: any = await getBase64(fileList[0]);
          console.log('urllll', res);
          setImageUrl(res);
          if (!fileList[0].url) {
            console.log(fileList);
            setFileList((prev: any) => [
              { uid: fileName, name: fileName, url: res }
            ]);
          }
        } catch (error) {}
      }
    };
    getBase64Img();
  }, [fileList, status]);
  return {
    fileList,
    status,
    imageUrl,
    beforeUpload,
    onRemove
  };
};
