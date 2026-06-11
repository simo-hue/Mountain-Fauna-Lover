export type GearCategory =
  | "digiscoping"
  | "camera"
  | "support"
  | "mountainSki"
  | "ebikeOffroad"
  | "editingSoftware";

export type GearItem = {
  id: string;
  category: GearCategory;
  nameKey: string;
  descriptionKey: string;
  image?: string;
  href?: string;
  sponsored: false;
};

export const gearItems: GearItem[] = [
  {
    id: "spotting-scope",
    category: "digiscoping",
    nameKey: "items.spottingScope.name",
    descriptionKey: "items.spottingScope.description",
    sponsored: false,
  },
  {
    id: "camera-kit",
    category: "camera",
    nameKey: "items.cameraKit.name",
    descriptionKey: "items.cameraKit.description",
    sponsored: false,
  },
  {
    id: "tripod",
    category: "support",
    nameKey: "items.tripod.name",
    descriptionKey: "items.tripod.description",
    sponsored: false,
  },
  {
    id: "ski-kit",
    category: "mountainSki",
    nameKey: "items.skiKit.name",
    descriptionKey: "items.skiKit.description",
    sponsored: false,
  },
  {
    id: "ebike-kit",
    category: "ebikeOffroad",
    nameKey: "items.ebikeKit.name",
    descriptionKey: "items.ebikeKit.description",
    sponsored: false,
  },
  {
    id: "editing-suite",
    category: "editingSoftware",
    nameKey: "items.editingSuite.name",
    descriptionKey: "items.editingSuite.description",
    sponsored: false,
  },
];
