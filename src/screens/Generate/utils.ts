import Cookies from "js-cookie";

export const addColorToCookies = (color: string) => {
  const prev = Cookies.get("color");
  let colors: string[] = [];

  try {
    colors = prev ? JSON.parse(prev) : [];
  } catch (error) {
    console.log(error);
    console.warn("Invalid color cookie format, resetting it.");
  }

  if (!colors.includes(color)) {
    colors.push(color);
  }

  Cookies.set("color", JSON.stringify(colors));
};
