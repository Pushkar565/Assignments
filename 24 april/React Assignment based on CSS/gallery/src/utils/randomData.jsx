// src/utils/randomData.js
import faker from 'faker';

export const generateRandomTitle = () => faker.lorem.words(2);
export const generateRandomPrice = () => faker.commerce.price();
