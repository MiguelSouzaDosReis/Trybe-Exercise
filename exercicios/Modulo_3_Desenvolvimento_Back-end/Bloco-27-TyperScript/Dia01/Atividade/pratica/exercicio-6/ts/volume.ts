function convert(value: number, fromUnit: string, toUnit: string) {
    const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;

    console.log(value * Math.pow(10, exponent));
}

export default convert;

convert(1, 'km³', 'm³')