export const makeImagePreview = (response = {}) => {
  if (response?.data?.length > 0) {
    let temp = {
      ...response,
      data: response?.data?.map((item) => ({
        ...item,
        preview: Array.from(item?.poster?.data || []),
      })),
    };
    return temp;
  }
  return null;
};

export const makeImagePreviewReplica = (response = {}) => {
  if (response?.data?.length > 0) {
    let temp = {
      ...response,
      data: response?.data?.map((item) => ({
        ...item,
        preview: btoa(base64Capable(item?.preview)),
      })),
    };
    return temp;
  }
  return null;
};

const base64Capable = (byteArray = []) => {
  let base64String = "";
  for (let i = 0; i < byteArray.length; i++) {
    base64String += String.fromCharCode(byteArray[i]);
  }
  return base64String;
};
