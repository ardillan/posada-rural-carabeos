import Root from "./components";

const posaraRuralCarabeosTheme = {
  name: "posada-rural-carabeos",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
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
};

export default posaraRuralCarabeosTheme;
