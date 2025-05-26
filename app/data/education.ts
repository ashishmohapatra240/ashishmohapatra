interface EducationItem {
    institution: string;
    degree: string;
    duration: string;
    grade?: string;
    logo: string;
}

export const education: EducationItem[] = [
    {
        institution: "Odisha University of Technology and Research, BBSR",
        degree: "B.Tech in Information Technology",
        duration: "2020-2024",
        grade: "CGPA: 8.03",
        logo: "/images/about/education/outr.png"
    },
    {
        institution: "Mother's Public School, BBSR",
        degree: "Intermediate in Science",
        duration: "2017-2019",
        grade: "Percentage: 81%",
        logo: "/images/about/education/mps.png"
    },
    {
        institution: "Kendriya Vidyalaya, Paradip Port",
        degree: "Matriculation",
        duration: "2017",
        grade: "CGPA: 10",
        logo: "/images/about/education/kv.png"
    }
];