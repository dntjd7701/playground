'use client';

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  console.debug('item:', item); // ['item1', 'item2', 'item3']
  const path = [...item].join('/');
  console.debug('path:', path); // abc
};

export default ItemPage;
