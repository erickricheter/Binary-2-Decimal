export const Convertor = {
  binary2decimal: (valor: string) => {
    let result = 0;
    const numberRegex = /^[0]+$/;
    if (numberRegex.test(valor)) {
      return 0;
    }
    for (let i = 0; i < valor.length; i++) {
      const valueNumber = Number(valor[valor.length - 1 - i]);
      const binaryValue = (valueNumber * 2) ** i;
      result += binaryValue;
    }
    return result;
  },
};
