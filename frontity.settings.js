const settings = {
  name: "posada-rural-carabeos",
  state: {
    frontity: {
      url: "https://posadaruralcarabeos.wordpress.com",
      title: "Posada Rural Los Carabeos",
      description: "Naturaleza, bicicleta y descanso",
    },
    actions: {
      theme: {
        openMenu: ({ state }) => {
          state.theme.isMenuOpen = true;
        },
        closeMenu: ({ state }) => {
          state.theme.isMenuOpen = false;
        },
      },
    },
  },
  packages: [
    {
      name: "posada-rural-carabeos",
      state: {
        theme: {
          menu: [],
          screenSizes: {
            desktop: "1200px",
            tablet: "768px",
            mobile: "480px",
            container: "900px",
            pageContainer: "800px",
          },
          colors: {
            blue: "#abd6ff",
            softBlue: "#C6E3FF",
            darkYellow: "#FEB02C",
            dark: "#27214D",
            green: "#008000",
            darkGreen: "#006600",
          },
          effects: {
            transition: "all 0.5s",
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://posadaruralcarabeos.wordpress.com",
          homepage: "inicio",
          postsPage: "blog",
        },
        postsPage: "/blog/",
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
