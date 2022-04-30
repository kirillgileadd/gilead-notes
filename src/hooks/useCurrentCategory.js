import { useMemo } from 'react';

export const useCurrentCategory = (category, categoryList) => {
  const currentCategory = useMemo(() => {
    if(typeof category === 'string') {
      return categoryList.find(cat => cat.name === category)
    } else if(typeof category === 'number') {
      return categoryList.find(cat => cat.id === category)
    }
  }, [category, categoryList])
 return currentCategory
}