export const kFormatter = (num: number) =>
  Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + "k" : Math.abs(num);

export const priceCompare = ({
  price,
  price_max,
  price_min,
}: {
  price: number;
  price_max: number;
  price_min: number;
}) =>
  price === price_max
    ? price.toString().slice(0, price.toString().split("").length - 5)
    : `${price_min
        .toString()
        .slice(0, price_min.toString().split("").length - 5)}-${kFormatter(
        parseInt(
          price_max
            .toString()
            .slice(0, price_max.toString().split("").length - 5)
        )
      )}`;
