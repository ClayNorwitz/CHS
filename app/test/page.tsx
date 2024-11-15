import CollectionsSections from 'components/home/collections-section';
import Hero from 'components/home/hero';
import ProductGrid from 'components/home/product-grid';
import Spacer from 'components/spacer';

const Test = () => {
  return (
    <div>
      <Hero />
      <ProductGrid />
      <Spacer bgCol="bg-chs-gray">
        <CollectionsSections />
      </Spacer>
    </div>
  );
};

export default Test;
