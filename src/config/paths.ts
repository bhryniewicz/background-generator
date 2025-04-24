type NavbarRoute = {
  label: string;
  route: string;
};

export const routes: NavbarRoute[] = [
  {
    label: "Generate",
    route: "/generate",
  },
  {
    label: "Images",
    route: "/gallery",
  },
  {
    label: "Statistics",
    route: "/stats",
  },
];
