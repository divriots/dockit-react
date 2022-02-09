import { useState, useEffect } from 'react';
import type { ComponentWithDocGenInfo, DocGenInfo } from './types';

export function useDocgenInfo(of: ComponentWithDocGenInfo): [DocGenInfo, any] {
  const [docgenInfo, setDocgenInfo] = useState<DocGenInfo>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (of.__docgenInfo) {
      setDocgenInfo(of.__docgenInfo);
    } else if (of.__dynamicDocgenInfo) {
      Promise.resolve(of.__dynamicDocgenInfo)
        .then(setDocgenInfo)
        .catch(setError);
    } else {
      setError(new Error('DocGen failed to generate info'));
    }
  }, [of]);
  return [docgenInfo, error];
}
