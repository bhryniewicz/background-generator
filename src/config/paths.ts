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
    label: "Gallery",
    route: "/gallery",
  },
  {
    label: "Statistics",
    route: "/stats",
  },
];
