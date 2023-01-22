import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import Spinner from '../../components/Spinner/Spinner';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/category/category.selector';

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
}

export default CategoriesPreview;
