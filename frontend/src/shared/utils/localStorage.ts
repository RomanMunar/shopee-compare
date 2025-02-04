import { SellerLocation, BookMark, Layout, Sort } from "../../interfaces";

export {
  getSettings,
  getBookmarks,
  setSettings,
  resetSettings,
  addBookmark,
  updateBookmark,
  removeBookmark,
  getDialogs,
  setDialogs,
  defaultSettings,
};
interface LocalStorage {
  Bookmarks: BookMark[];
  Settings: Settings;
  Dialogs: Dialogs;
  UserID: UserID;
}

export type UserID = number;
export type Dialog = "showHelpGuide" | "showCompareGuide";
export type Dialogs = Dialog[];
type LocalStorageItem = keyof LocalStorage;
const getLocalStorageItem = <T extends LocalStorageItem>(
  item: T
): T extends "Bookmarks"
  ? BookMark[]
  : T extends "Settings"
  ? Settings
  : T extends "Dialogs"
  ? Dialogs
  : UserID => JSON.parse(localStorage.getItem(item)!);

const setLocalStorageItem = <T extends LocalStorageItem>(
  item: T,
  payload: T extends "Bookmarks"
    ? BookMark[]
    : T extends "Settings"
    ? Settings
    : T extends "Dialogs"
    ? Dialogs
    : UserID
) => localStorage.setItem(item, JSON.stringify(payload))!;

export const getUserID = () => {
  const userID = getLocalStorageItem("UserID");
  if (!userID) {
    const id = Date.now();
    setLocalStorageItem("UserID", id);
    return id;
  }
  return userID;
};

export type Action =
  | "blockSeller"
  | "expandBookmarks"
  | "autoPin"
  | "DndInNoLayout";

interface Settings {
  preference: {
    searchSort: Sort;
    layout: Layout;
    sellerLocation: SellerLocation[];
  };
  action: Action[];
}
const defaultSettings: Settings = {
  preference: {
    searchSort: "sales",
    layout: "double",
    sellerLocation: [
      "Metro Manila",
      "Mindanao",
      "North Luzon",
      "South Luzon",
      "Visayas",
      "-2",
    ],
  },
  action: ["expandBookmarks", "autoPin", "DndInNoLayout"],
};
const defaultDialogs: Dialogs = ["showHelpGuide", "showCompareGuide"];
const getDialogs = (): Dialogs => {
  const dialogs = getLocalStorageItem("Dialogs");
  if (!dialogs) {
    setDialogs(defaultDialogs);
    return defaultDialogs;
  }
  return dialogs;
};

const setDialogs = (dialogs: Dialogs) => {
  setLocalStorageItem("Dialogs", dialogs);
};

const getSettings = () => {
  const settings = getLocalStorageItem("Settings");
  if (!settings) {
    setSettings(defaultSettings);
    return defaultSettings;
  }
  return settings;
};
const setSettings = (bookmarks: Settings) =>
  setLocalStorageItem("Settings", bookmarks);
const resetSettings = () => setSettings(defaultSettings);

const defaultBookmarks = [
  {
    title: "👋👋Welcome !",
    description:
      "Try to click the blue circle above the vertical line, you may change this default behavior on the settings",
    id: Date.now(),
    pinned: false,
    items: [
      {
        has_lowest_price_guarantee: true,
        itemid: 6539310796,
        name: "This is a sample item ",
        adsid: 1423743,
        brand: "No Brand",
        image: "c64b792e4163a401233d483d6fe55efa",
        images: [
          "c64b792e4163a401233d483d6fe55efa",
          "d99f8b6b86a20557aa12876404ecf4c2",
          "c7de1b9bd3688d6647ed704e3d75bb44",
          "1100512d6bf48f1360801fd04a23c87a",
          "c9cd90eb2e846c2953816eeff5550c5f",
          "aff4a7ea8b9d11cb228b8dae5d577371",
          "c2cbe8b4fdfe31b5583f1943f2cef992",
          "43097c1f0bf98ce025135eb78b804a86",
          "d3469b08df904e91e17b835561dd90d9",
        ],
        item_rating: {
          rating_count: [11503, 115, 54, 219, 898, 10217],
          rating_star: 4.830261,
          rcount_with_context: 3853,
          rcount_with_image: 2369,
        },
        price_min: 24000000,
        price_max: 66900000,
        price: 24000000,
        sold: 3443,
        shopee_verified: true,
        shopid: 181860033,
        shop_location: "Overseas",
        tier_variations: [
          {
            images: [
              "558ae7630c7207f045febfd7ad92745f",
              "76ca44b377c44b505a3e5c20ed152b2d",
              "28ab2fd9eaba0c7069bbed7074526f29",
              "91aca3db6b3aa56c57f500829ec24d15",
              "2252e4de59d4026fc554051a63d3f106",
              "b576ca60a5da046de54b40e28cac3b41",
              "ca51c54a1954659e81b14e60e9ecc631",
              "5d5750297cbfc30def165f57fbe52d57",
            ],
            name: "Type",
            options: [
              "Noise Reduction Mic",
              "Grey（Dual 3.5MM）",
              "Grey（Single 3.5MM)",
              "White(Dual 3.5mm）",
              "Gold(Dual 3.5mm）",
              "Gold（Single 3.5MM）",
              "Headset stand Black",
              "Headset stand White",
            ],
          },
        ],
        liked_count: 8072,
        is_adult: false,
        raw_discount: 86,
      },
      {
        has_lowest_price_guarantee: true,
        itemid: 7041749586,
        name:
          "Try to click the pin icon that appears if you hover over this bookmark ",
        adsid: 1731776,
        brand: "No Brand",
        image: "aa17c59dc8e94a418919d3907840c02e",
        images: [
          "aa17c59dc8e94a418919d3907840c02e",
          "46de921f14a9e553ad978e11583963a5",
          "01242b0ac2c6721e801ef2f096c27c9b",
          "02bfec50c38b0c3a6a6f3989d691e86a",
          "d239cb6c887f93907db0b70c9301cc22",
          "2db211278f0cb7e700ad07d883a89e83",
          "3ba5451d49d014cad0ff45f0f23dd1c6",
        ],
        item_rating: {
          rating_count: [60360, 1228, 774, 2529, 4839, 50990],
          rating_star: 4.717516,
          rcount_with_context: 18155,
          rcount_with_image: 10759,
        },
        price_min: 17600000,
        price_max: 17600000,
        price: 17600000,
        sold: 71043,
        shopee_verified: false,
        shopid: 270420997,
        shop_location: "Overseas",
        tier_variations: [
          {
            images: [
              "5a5f3eb96799266bec47aee85bd0f3c3",
              "3acfb968ece9f8fae9aaab55c507246e",
              "e1a25c7e72730a214e08ee7aae85a142",
              "00022b9970d9e2d1a84f59b93ddc3b91",
              "4f966278eb54ac4aacc45b16ab5d3490",
              "886ad3fd540d97748a5d6bba9bd2bed3",
              "41adcf9d4dd41115ed23c4e2f4b4962d",
              "201d65cfbd5ea1d4ff249296fe78d3f3",
              "ed7e537ffc866072b22deebec6a83476",
            ],
            name: "Color",
            options: [
              "White",
              "Pink",
              "Blue",
              "Green",
              "Yellow",
              "Black",
              "Gray",
              "Dark Blue",
              "Red",
            ],
          },
        ],
        liked_count: 32373,
        is_adult: false,
        raw_discount: 82,
      },
      {
        has_lowest_price_guarantee: false,
        itemid: 5147861738,
        name:
          "Great Job!, Now Click the `Compare now` button, this will transfer you to the compare page, with items included here",
        adsid: null,
        brand: "REMAX",
        image: "f6415c4042f6b44b01b84e083abf0eba",
        images: [
          "f6415c4042f6b44b01b84e083abf0eba",
          "c707d6dfeeb870f5c06e8cb60eb0b8c7",
          "442f9f38202b591caaf8db2b50954fe7",
          "afc1e02bdd9c006121998d32a2e85faf",
          "fbd7c003ef4b3c0faac259c47b025fba",
          "3c8e748c06b86bca3f31eb37f9991746",
          "451d5f5cb39e6d4b9d8685aec9c6cbd2",
          "43fd9a88f0de90a4408a542a2f4b11f3",
          "7ee3bbbe390078e178d12bbe09d5677d",
        ],
        item_rating: {
          rating_count: [932, 5, 4, 9, 48, 866],
          rating_star: 4.89485,
          rcount_with_context: 346,
          rcount_with_image: 258,
        },
        price_min: 5900000,
        price_max: 10900000,
        price: 5900000,
        sold: 5152,
        shopee_verified: false,
        shopid: 298473025,
        shop_location: "Overseas",
        tier_variations: [
          {
            images: [
              "b75502dfc045197ec89f1772778f7211",
              "2dc0eab38f1413a004d68a1d28f37b28",
            ],
            name: "Types",
            options: ["Metal Box 510", "Carton Box 106"],
          },
          {
            images: [],
            name: "Color",
            options: ["Blue", "Grey", "Red", "Black", "Pink", "White"],
          },
        ],
        liked_count: 1011,
        is_adult: false,
        raw_discount: 56,
      },
    ],
  },
  {
    title: "👋👋Welcome !",
    description:
      "I'm your second bookmark, if you pin me, i'll bubble to the top",
    id: Date.now(),
    pinned: false,
    items: [
      {
        has_lowest_price_guarantee: true,
        itemid: 6539310796,
        name: "This is a sample item ",
        adsid: 1423743,
        brand: "No Brand",
        image: "c64b792e4163a401233d483d6fe55efa",
        images: [
          "c64b792e4163a401233d483d6fe55efa",
          "d99f8b6b86a20557aa12876404ecf4c2",
          "c7de1b9bd3688d6647ed704e3d75bb44",
          "1100512d6bf48f1360801fd04a23c87a",
          "c9cd90eb2e846c2953816eeff5550c5f",
          "aff4a7ea8b9d11cb228b8dae5d577371",
          "c2cbe8b4fdfe31b5583f1943f2cef992",
          "43097c1f0bf98ce025135eb78b804a86",
          "d3469b08df904e91e17b835561dd90d9",
        ],
        item_rating: {
          rating_count: [11503, 115, 54, 219, 898, 10217],
          rating_star: 4.830261,
          rcount_with_context: 3853,
          rcount_with_image: 2369,
        },
        price_min: 24000000,
        price_max: 66900000,
        price: 24000000,
        sold: 3443,
        shopee_verified: true,
        shopid: 181860033,
        shop_location: "Overseas",
        tier_variations: [
          {
            images: [
              "558ae7630c7207f045febfd7ad92745f",
              "76ca44b377c44b505a3e5c20ed152b2d",
              "28ab2fd9eaba0c7069bbed7074526f29",
              "91aca3db6b3aa56c57f500829ec24d15",
              "2252e4de59d4026fc554051a63d3f106",
              "b576ca60a5da046de54b40e28cac3b41",
              "ca51c54a1954659e81b14e60e9ecc631",
              "5d5750297cbfc30def165f57fbe52d57",
            ],
            name: "Type",
            options: [
              "Noise Reduction Mic",
              "Grey（Dual 3.5MM）",
              "Grey（Single 3.5MM)",
              "White(Dual 3.5mm）",
              "Gold(Dual 3.5mm）",
              "Gold（Single 3.5MM）",
              "Headset stand Black",
              "Headset stand White",
            ],
          },
        ],
        liked_count: 8072,
        is_adult: false,
        raw_discount: 86,
      },
      {
        has_lowest_price_guarantee: true,
        itemid: 7041749586,
        name:
          "Try to click the pin icon that appears if you hover over this bookmark ",
        adsid: 1731776,
        brand: "No Brand",
        image: "aa17c59dc8e94a418919d3907840c02e",
        images: [
          "aa17c59dc8e94a418919d3907840c02e",
          "46de921f14a9e553ad978e11583963a5",
          "01242b0ac2c6721e801ef2f096c27c9b",
          "02bfec50c38b0c3a6a6f3989d691e86a",
          "d239cb6c887f93907db0b70c9301cc22",
          "2db211278f0cb7e700ad07d883a89e83",
          "3ba5451d49d014cad0ff45f0f23dd1c6",
        ],
        item_rating: {
          rating_count: [60360, 1228, 774, 2529, 4839, 50990],
          rating_star: 4.717516,
          rcount_with_context: 18155,
          rcount_with_image: 10759,
        },
        price_min: 17600000,
        price_max: 17600000,
        price: 17600000,
        sold: 71043,
        shopee_verified: false,
        shopid: 270420997,
        shop_location: "Overseas",
        tier_variations: [
          {
            images: [
              "5a5f3eb96799266bec47aee85bd0f3c3",
              "3acfb968ece9f8fae9aaab55c507246e",
              "e1a25c7e72730a214e08ee7aae85a142",
              "00022b9970d9e2d1a84f59b93ddc3b91",
              "4f966278eb54ac4aacc45b16ab5d3490",
              "886ad3fd540d97748a5d6bba9bd2bed3",
              "41adcf9d4dd41115ed23c4e2f4b4962d",
              "201d65cfbd5ea1d4ff249296fe78d3f3",
              "ed7e537ffc866072b22deebec6a83476",
            ],
            name: "Color",
            options: [
              "White",
              "Pink",
              "Blue",
              "Green",
              "Yellow",
              "Black",
              "Gray",
              "Dark Blue",
              "Red",
            ],
          },
        ],
        liked_count: 32373,
        is_adult: false,
        raw_discount: 82,
      },
      {
        has_lowest_price_guarantee: false,
        itemid: 5147861738,
        name:
          "Great Job!, Now Click the `Compare now` button, this will transfer you to the compare page, with items included here",
        adsid: null,
        brand: "REMAX",
        image: "f6415c4042f6b44b01b84e083abf0eba",
        images: [
          "f6415c4042f6b44b01b84e083abf0eba",
          "c707d6dfeeb870f5c06e8cb60eb0b8c7",
          "442f9f38202b591caaf8db2b50954fe7",
          "afc1e02bdd9c006121998d32a2e85faf",
          "fbd7c003ef4b3c0faac259c47b025fba",
          "3c8e748c06b86bca3f31eb37f9991746",
          "451d5f5cb39e6d4b9d8685aec9c6cbd2",
          "43fd9a88f0de90a4408a542a2f4b11f3",
          "7ee3bbbe390078e178d12bbe09d5677d",
        ],
        item_rating: {
          rating_count: [932, 5, 4, 9, 48, 866],
          rating_star: 4.89485,
          rcount_with_context: 346,
          rcount_with_image: 258,
        },
        price_min: 5900000,
        price_max: 10900000,
        price: 5900000,
        sold: 5152,
        shopee_verified: false,
        shopid: 298473025,
        shop_location: "Overseas",
        tier_variations: [
          {
            images: [
              "b75502dfc045197ec89f1772778f7211",
              "2dc0eab38f1413a004d68a1d28f37b28",
            ],
            name: "Types",
            options: ["Metal Box 510", "Carton Box 106"],
          },
          {
            images: [],
            name: "Color",
            options: ["Blue", "Grey", "Red", "Black", "Pink", "White"],
          },
        ],
        liked_count: 1011,
        is_adult: false,
        raw_discount: 56,
      },
    ],
  },
];
const getBookmarks = () => {
  const bookmarks = getLocalStorageItem("Bookmarks");
  if (!bookmarks) {
    setBookmarks(defaultBookmarks);
    return defaultBookmarks;
  }
  return bookmarks;
};
const setBookmarks = (bookmarks: BookMark[]) =>
  setLocalStorageItem("Bookmarks", bookmarks);

const removeBookmark = (id: number) => {
  const bookmarks = getBookmarks().filter((b) => b.id !== id);
  setBookmarks(bookmarks);
};

const updateBookmark = (id: number, newBookmark: BookMark) => {
  const bookmarks = getBookmarks().filter((b) => b.id !== id);
  setBookmarks([...bookmarks, newBookmark]);
};

const addBookmark = (newBookmark: BookMark): BookMark[] => {
  const bookmarks = getBookmarks();
  if (!bookmarks) {
    setBookmarks([newBookmark]);
    return [newBookmark];
  }
  setBookmarks([newBookmark, ...bookmarks]);
  return [newBookmark, ...bookmarks];
};
