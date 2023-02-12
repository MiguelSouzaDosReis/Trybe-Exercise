function convert(value: number, fromUnit: string, toUnit: string) {
    const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;

    console.log(value * Math.pow(10, exponent));
}

export default convert

convert(1, 'km²', 'm²')