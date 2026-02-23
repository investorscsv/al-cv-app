export type EducationInstitution = {
  id: string;
  name: string;
  logo: string;
  url: string;
};

export const EDUCATION_INSTITUTIONS: Record<number, EducationInstitution> = {
  1: {
    id: "1",
    name: "Dnipro University of Technology",
    logo: "/degree/6.png",
    url: "https://nmu.org.ua/en/",
  },
  2: {
    id: "2",
    name: "Udemy",
    logo: "/degree/1.png",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-Z53NQJ8Z.pdf",
  },
  3: {
    id: "3",
    name: "EInstitute",
    logo: "/degree/2.png",
    url: "https://www.emarketinginstitute.org/certificate/seo-certification-and-course-free-anton/",
  },
  4: {
    id: "4",
    name: "Semrush",
    logo: "/degree/3.png",
    url: "https://static.semrush.com/academy-prod/certificate/11115193/oiliWZWd0SYdIMY.png",
  },
  5: {
    id: "5",
    name: "Google Skills",
    logo: "/degree/4.png",
    url: "https://skillshop.credential.net/6fe31290-4db5-49be-8d23-db3612670c9e#acc.OC0Y9aA5",
  },
  6: {
    id: "6",
    name: "EF SET",
    logo: "/degree/5.png",
    url: "https://cert.efset.org/en/1xBfEc",
  },
};
