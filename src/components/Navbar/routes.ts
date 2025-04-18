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
    route: "/images",
  },
  {
    label: "Statistics",
    route: "/stats",
  },
];
