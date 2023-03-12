export const Validator = {
  binary: (valor: string) => {
    const inputValue = valor;
    const numberRegex = /^[0-1]+$/;
    return numberRegex.test(inputValue);
  },
};
