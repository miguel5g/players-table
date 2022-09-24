function valueComparator(value, targetValue, operator) {
  if (targetValue === null) return true;

  switch (operator) {
    case 'CONTAINS':
      return value.includes(targetValue);

    case 'EQUAL':
      return +value === +targetValue;

    case 'LESS THAN':
      return +value < +targetValue;

    case 'BIGGER THAN':
      return +value > +targetValue;

    default:
      return false;
  }
}

export { valueComparator };
