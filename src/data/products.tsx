import IProduct, { ProductCategory } from "../types/Product";

const products: IProduct[] = [
    {
        id: "1",
        name: "Butter",
        category: ProductCategory.Indoor,
        price: 0.80,
        quantity: 0,
        img: require(`../../assets/images/products/butter.png`),
        discount: 0,
        useDiscount: ({ quantity = 0, price }: IProduct, cart: IProduct[]) => {
            return { total: quantity * price }
        }
    },
    {
        id: "2",
        name: "Bread",
        category: ProductCategory.Indoor,
        price: 1.00,
        quantity: 0,
        img: require(`../../assets/images/products/bread.png`),
        discount: 0,
        useDiscount: ({ quantity = 0, price }: IProduct, cart: IProduct[]) => {
            const butter = cart.find(p => p.name == "Butter");
            let total = quantity * price;

            // Buy 2 Butter and get a Bread at 50% off
            if (butter && butter.quantity >= 2) {
                // get one decimal without rounding
                let discounts = Number((butter.quantity / 2).toString()[0]);

                // foreach 2 butter get a -50% on one bread.
                if (quantity < discounts) discounts = quantity
                const discount = ((price * 50) / 100) * discounts;

                return {
                    discount,
                    total: total - discount
                }
            }

            return { total: quantity * price }
        }
    },
    {
        id: "3",
        name: "Milk",
        category: ProductCategory.Indoor,
        price: 1.15,
        quantity: 0,
        discount: 0,
        img: require(`../../assets/images/products/milk.png`),
        useDiscount: ({ quantity = 0, price }: IProduct, cart: IProduct[]) => {
            // Buy 3 Milk and get the 4th milk for free

            const free = Number((quantity / 4).toString()[0]);
            const discount = (price * free);

            if (free >= 1) {
                return {
                    give: free,
                    total: (quantity * price) - discount,
                    discount: discount
                }
            }

            return { total: quantity * price }
        }
    }
]

export default products