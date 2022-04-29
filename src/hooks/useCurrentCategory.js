import { useMemo } from 'react';

export const useCurrentCategory = (categoryName, categoryList) => {
  const currentCategory = useMemo(() => {
    if(categoryName) {
      return categoryList.find(cat => cat.name === categoryName)
    }
  }, [categoryName, categoryList])

 return currentCategory
}