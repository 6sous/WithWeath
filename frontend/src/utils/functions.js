import { useEffect, useState } from "react";

// fonction qui reçoit un nombre avec 2 décimales et qui arrondie à la valeur supérieure avec un chiffre après la virgule.
export const roundNumber = (number) => {
  const roundedNumber = Math.round(number * 10) / 10;
  const roundedString = roundedNumber.toFixed(1);
  const roundedInt = parseFloat(roundedString);

  return roundedInt;
};

// fonction qui sélectionne un index àléatoire dans un tableau
export const randomNum = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

// custom hook which determines if it's day or night
export const useIsItDay = (dt, sunriseTime, sunsetTime, timezone) => {
  const [dayOrNight, setDayOrNight] = useState(false);
  const currentTime = new Date((dt + timezone) * 1000).getUTCHours();
  const sunrise = new Date((sunriseTime + timezone) * 1000).getUTCHours();
  const sunset = new Date((sunsetTime + timezone) * 1000).getUTCHours();

  useEffect(() => {
    if (currentTime >= sunrise && currentTime < sunset) {
      setDayOrNight(true);
    } else {
      setDayOrNight(false);
    }
  });

  return dayOrNight;
};
