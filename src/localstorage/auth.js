export const getAnswer = () => {
    return localStorage.getItem('answer');
};

export const getFood = () => {
    return localStorage.getItem('food');
};
  
export const setInfo = (answer, food) => {
    localStorage.setItem('answer', answer);
    localStorage.setItem('food', food);
};
  
export const removeInfo = () => {
    localStorage.removeItem('answer');
    localStorage.removeItem('food');
};