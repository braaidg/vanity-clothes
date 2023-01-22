import DirectoryItem from '../DirectoryItem/DirectoryItem';

import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl:
      'https://res.cloudinary.com/ddr9q7fmr/image/upload/v1674419397/Vanity%20clothes/Directory/hats_tasdq4.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl:
      'https://res.cloudinary.com/ddr9q7fmr/image/upload/v1674419397/Vanity%20clothes/Directory/jackets_fdm605.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl:
      'https://res.cloudinary.com/ddr9q7fmr/image/upload/v1674419397/Vanity%20clothes/Directory/sneakers_qrpfx0.png',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl:
      'https://res.cloudinary.com/ddr9q7fmr/image/upload/v1674419397/Vanity%20clothes/Directory/womens_m5oe0p.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl:
      'https://res.cloudinary.com/ddr9q7fmr/image/upload/v1674419397/Vanity%20clothes/Directory/men_x6fvcq.png',
    route: 'shop/mens',
  },
];

function Directory() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
export default Directory;
