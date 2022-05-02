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
        name: "Inbound List",
        href: "/inbound",
      },
      {
        id: 1,
        name: "Inbound Process",
        href: "/inbound/process",
        sub: [
          {
            id: 0,
            name: "Feature1",
            href: "/inbound/process/feature1",
          },
          {
            id: 1,
            name: "Feature2",
            href: "/inbound/process/feature2",
          },
          {
            id: 2,
            name: "Feature3",
            href: "/inbound/process/feature3",
          },
        ],
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
        name: "Outbound List",
        href: "/outbound",
      },
      {
        id: 1,
        name: "Outbound Process",
        href: "/outbound/process",
        sub: [
          {
            id: 0,
            name: "Feature1",
            href: "/outbound/process/feature1",
          },
          {
            id: 1,
            name: "Feature2",
            href: "/outbound/process/feature2",
          },
          {
            id: 2,
            name: "Feature3",
            href: "/outbound/process/feature3",
          },
        ],
      },
      {
        id: 2,
        name: "Outbound Picking",
        href: "/outbound/picking",
      },
      {
        id: 3,
        name: "Outbound Packing",
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
        name: "Inventory List",
        href: "/inventory",
      },
      {
        id: 1,
        name: "Inventory Adjustment",
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
        name: "Master Data List",
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
        name: "Location List",
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
