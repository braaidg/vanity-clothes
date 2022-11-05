import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import getCategoriesMap from '../../store/category/category.selector';

function CategoriesPreview() {
  const categoriesMap = useSelector(getCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}

export default CategoriesPreview;
