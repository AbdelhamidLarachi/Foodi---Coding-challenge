import IProduct from "../types/Product";

/// <summary>
/// Convert array to object, so we point faster and directly to a product id
/// without index fetching every time.
/// <Returns> IProduct[] </Returns>
/// <Exception> none </Exception>
/// </summary>

export default (array: any[]): IProduct[] => {
  try {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item.id]: item,
      };
    }, initialValue);
  } catch {
    return [];
  }
};
