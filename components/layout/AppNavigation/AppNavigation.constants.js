export const MENU_LIST_DATA = [
  {
    id: 0,
    name: "Home",
    href: "/",
    sub: [],
  },
  {
    id: 1,
    name: "Inbound",
    href: "/inbound",
    sub: [
      {
        id: 0,
        name: "List",
        href: "/inbound",
      },
      {
        id: 1,
        name: "Process",
        href: "/inbound/process",
      },
    ],
  },
  {
    id: 2,
    name: "Outbound",
    href: "/outbound",
    sub: [
      {
        id: 0,
        name: "List",
        href: "/outbound",
      },
      {
        id: 1,
        name: "Process",
        href: "/outbound/process",
      },
      {
        id: 2,
        name: "Picking",
        href: "/outbound/picking",
      },
      {
        id: 3,
        name: "Packing",
        href: "/outbound/packing",
      },
    ],
  },
  {
    id: 3,
    name: "Inventory",
    href: "/inventory",
    sub: [
      {
        id: 0,
        name: "List",
        href: "/inventory",
      },
      {
        id: 1,
        name: "Adjustment",
        href: "/inventory/adjustment",
      },
    ],
  },
  {
    id: 4,
    name: "Master Data",
    href: "/master-data",
    sub: [
      {
        id: 0,
        name: "List",
        href: "/master-data",
      },
      {
        id: 1,
        name: "Master Data Sub Menu 1",
        href: "/master-data/sub-menu1",
      },
      {
        id: 2,
        name: "Master Data Sub Menu 2",
        href: "/master-data/sub-menu2",
      },
    ],
  },
  {
    id: 5,
    name: "Location",
    href: "/location",
    sub: [
      {
        id: 0,
        name: "List",
        href: "/location",
      },
      {
        id: 1,
        name: "Location Sub Menu",
        href: "/location/sub-menu",
      },
    ],
  },
];
