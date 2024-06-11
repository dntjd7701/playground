'use client';

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = [...item].join('/');
};

export default ItemPage;
