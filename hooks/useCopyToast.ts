import { useState } from "react";

export const useCopyToast = () => {
  const [copyMessage, setCopyMessage] = useState('');

  const showCopyMessage = (message: string) => {
    setCopyMessage(message);
    setTimeout(() => setCopyMessage(''), 2000);
  };

  return { copyMessage, showCopyMessage };
};
