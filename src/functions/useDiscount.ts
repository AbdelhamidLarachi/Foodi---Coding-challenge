import IProduct from "../types/Product";

/// <summary>
/// Returns a rich cart list with total and discounts applied.
/// <Returns> IProduct[] </Returns>
/// <Exception> none </Exception>
/// </summary>

export default (obj: any): IProduct[] | any => {
  try {
    
    const products_ = Object.values(obj).filter((p: any) => p.quantity > 0);
    return products_.map(function (p: any) {
      return { ...p, ...p.useDiscount(p, products_) };
    }) as IProduct[];

  } catch {
    return {};
  }
};
