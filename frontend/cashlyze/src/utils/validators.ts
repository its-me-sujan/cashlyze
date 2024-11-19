function isEmpty(value: any) {
  if (value === null || value === undefined || value === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
}

function getParams(params: any) {
  if (!params) {
    return { width: 0, height: 0 };
  }
  if (Array.isArray(params)) {
    return { width: Number(params[0]), height: Number(params[1]) };
  }
  return {
    width: Number(params.width),
    height: Number(params.height),
  };
}

const validateImage = (file: any, width: number, height: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const URL = window.URL || window.webkitURL;
  return new Promise((resolve) => {
    const image = new Image();
    image.onerror = () => resolve(false);
    image.onload = () =>
      resolve(image.width <= width && image.height <= height);
    image.src = URL.createObjectURL(file);
  });
};

export const lessThanDimensions = (files: any, params: any) => {
  if (isEmpty(files)) {
    return true;
  }
  const { width, height } = getParams(params);
  const list = [];
  const fileList = Array.isArray(files) ? files : [files];
  for (let i = 0; i < fileList.length; i++) {
    // if file is not an image, reject.
    if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(fileList[i].name)) {
      return Promise.resolve(false);
    }
    list.push(fileList[i]);
  }
  return Promise.all(
    list.map((file) => validateImage(file, width, height))
  ).then((values) => {
    return values.every((v) => v);
  });
};
