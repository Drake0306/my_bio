export type EducationItem = {
  institution: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  logo?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Trident Academy of Technology",
    degree: "Bachelor in Computer Application (BCA)",
    // NEEDS UPDATE: confirm exact years
    start: "2016",
    end: "2019",
    location: "Bhubaneswar, Odisha",
  },
  {
    institution: "Sant Nandlal Smriti Vidya Mandir",
    degree: "Intermediate",
    // NEEDS UPDATE: confirm exact years
    start: "2014",
    end: "2016",
    location: "Ghatshila, Jharkhand",
  },
];
