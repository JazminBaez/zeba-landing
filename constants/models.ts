import { Model } from "../types/models";
export type FilterType = "All" | "She/Her" | "He/Him";

export const MODELS_DATA: Model[] = [
  {
    id: 1,
    name: "Aria Chen",
    image: "/placeholder.svg?height=400&width=300",
    stats: {
      height: "175 CM/5' 10\"",
      bust: '71 CM/28"',
      waist: '57 CM/22½"',
      hips: '84 CM/33"',
      shoe: "39 EU/8 US/6 UK",
      eyes: "BROWN",
    },
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    image: "/placeholder.svg?height=400&width=300",
    stats: {
      height: "178 CM/5' 11\"",
      bust: '73 CM/29"',
      waist: '59 CM/23"',
      hips: '86 CM/34"',
      shoe: "40 EU/9 US/7 UK",
      eyes: "GREEN",
    },
  },
  {
    id: 3,
    name: "Marcus Johnson",
    image: "/placeholder.svg?height=400&width=300",
    stats: {
      height: "185 CM/6' 1\"",
      bust: '96 CM/38"',
      waist: '76 CM/30"',
      hips: '94 CM/37"',
      shoe: "43 EU/10 US/9 UK",
      eyes: "BLUE",
    },
  },
  {
    id: 4,
    name: "Luna Park",
    image: "/placeholder.svg?height=400&width=300",
    stats: {
      height: "172 CM/5' 8\"",
      bust: '69 CM/27"',
      waist: '55 CM/21½"',
      hips: '82 CM/32"',
      shoe: "38 EU/7 US/5 UK",
      eyes: "DARK BROWN",
    },
  },
  {
    id: 5,
    name: "James Wilson",
    image: "/placeholder.svg?height=400&width=300",
    stats: {
      height: "182 CM/6' 0\"",
      bust: '94 CM/37"',
      waist: '74 CM/29"',
      hips: '92 CM/36"',
      shoe: "42 EU/9 US/8 UK",
      eyes: "HAZEL",
    },
  },
  {
    id: 6,
    name: "Isabella Torres",
    image: "/placeholder.svg?height=400&width=300",
    stats: {
      height: "176 CM/5' 9\"",
      bust: '72 CM/28½"',
      waist: '58 CM/23"',
      hips: '85 CM/33½"',
      shoe: "39 EU/8 US/6 UK",
      eyes: "BROWN",
    },
  },
  {
    id: 7,
    name: "Alex Thompson",
    image: "/placeholder.svg?height=400&width=300",
    stats: {
      height: "179 CM/5' 10\"",
      bust: '78 CM/31"',
      waist: '62 CM/24½"',
      hips: '88 CM/34½"',
      shoe: "41 EU/8 US/7 UK",
      eyes: "GREY",
    },
  },
  {
    id: 8,
    name: "Zara Ahmed",
    image: "/placeholder.svg?height=400&width=300",
    stats: {
      height: "174 CM/5' 8½\"",
      bust: '70 CM/27½"',
      waist: '56 CM/22"',
      hips: '83 CM/32½"',
      shoe: "38 EU/7 US/5 UK",
      eyes: "DARK BROWN",
    },
  },
];

export const FILTER_OPTIONS: FilterType[] = ["All", "She/Her", "He/Him"];

export const FEMALE_MODELS = ["Aria Chen", "Sofia Rodriguez", "Luna Park", "Isabella Torres", "Zara Ahmed"];
export const MALE_MODELS = ["Marcus Johnson", "James Wilson"];