export type DiscountCategories = 'Smartphones' | 'Furniture' | 'Electronics' | 'Appliances' | 'Refrigerators';

export const DISCOUNTS: Record<DiscountCategories, number> = {
    'Smartphones': 2.55,
    'Furniture': 3,
    'Electronics': 4.3,
    'Appliances': 5,
    'Refrigerators': 7.5
};

export const getDiscount = (category: DiscountCategories): number => {
    return DISCOUNTS[category] || 0;
};
