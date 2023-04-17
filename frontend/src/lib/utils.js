class Validation {
  static validateSize(realSize, size) {
    return size <= realSize;
  }
}
export function uploadImage(setFile, setPage) {
  const file = document.querySelector('.upload-container .hidden-choosefile');
  file.type = 'file';
  file.accept = 'image/';
  file.click();
  file.addEventListener(
    'change',
    () => {
      console.log(file.files);
      Validation.validateSize(5000000, file.files[0].size) &&
        setPage('loading');
      setFile(file.files[0]);
    },
    false
  );
}

export async function copyToClipboard(text) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}
