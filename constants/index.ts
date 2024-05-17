export const navLinks = [
    {
      label: "Home",
      route: "/",
      icon: "/assets/icons/home-icon.svg",
    },
    {
      label: "Criar questões",
      route: "/product/add/generatequestions",
      icon: "/assets/icons/check-icon.svg",
    },
    {
      label: "Gerar planos de aula",
      route: "/product/add/createclassplannings",
      icon: "/assets/icons/pencil-icon.svg",
    },
    {
      label: "Prompts prontos",
      route: "/product/add/promptsinterface",
      icon: "/assets/icons/stars-icon.svg",
    },
    {
      label: "Perfil",
      route: "/perfil",
      icon: "/assets/icons/user-icon.svg",
    },
    {
      label: "Meu Plano",
      route: "/plano",
      icon: "/assets/icons/card-icon.svg",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Free",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 20,
      inclusions: [
        {
          label: "20 Free Credits",
          isIncluded: true,
        },
        {
          label: "Basic Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: false,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Package",
      icon: "/assets/icons/free-plan.svg",
      price: 40,
      credits: 120,
      inclusions: [
        {
          label: "120 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Premium Package",
      icon: "/assets/icons/free-plan.svg",
      price: 199,
      credits: 2000,
      inclusions: [
        {
          label: "2000 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    generatequestions: {
      type: "generatequestions",
      title: "Gerar Questões",
      subTitle: "Gere questões de vestibular no modelo ENEM, Unicamp e USP",
      config: { generateQuestions: true },
      icon: "image.svg",
    },
    createclassplannings: {
      type: "createclassplannings",
      title: "Gerar planos de aula",
      subTitle: "Use a IA para criar ideias de aulas e planejamentos",
      config: { createClassPlannings: true },
      icon: "camera.svg",
    },
    promptsinterface: {
      type: "promptsinterface",
      title: "Prompts prontos",
      subTitle: "Interaja com a IA para ter ainda mais conteúdos para suas aulas",
      config: { promptsInterface: true },
      icon: "stars.svg",
    },
    remove: {
      type: "remove",
      title: "Object Remove",
      subTitle: "Identify and eliminate objects from images",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
    },
    recolor: {
      type: "recolor",
      title: "Object Recolor",
      subTitle: "Identify and recolor objects from the image",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;