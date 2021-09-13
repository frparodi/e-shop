export const setItemAmount = (array, item, operation) => {
  const newArray = array.map((obj) => ({ ...obj }));
  let product = newArray.find((it) => it.id === item.id);
  switch (operation) {
    case 'ADD':
      if (product !== undefined && product.amount) {
        product.amount = product.amount + 1;
      } else {
        const productModel = { ...item };
        productModel.amount = 1;
        newArray.push(productModel);
      }
      break;
    case 'REMOVE':
      if (product !== undefined && product.amount && product.amount === 1) {
        return newArray.filter((it) => it.id !== item.id);
      }
      if (product !== undefined && product.amount && product.amount > 1) {
        product.amount = product.amount - 1;
      }
      break;
    default:
      break;
  }
  return newArray;
};
