import React from "react"
import Home from "."
import themeDecorator from "../../theme/StorybookThemeDecorator"

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    componentSubtitle: "Screen a user first sees when they load the app.",
  },
  decorators: [themeDecorator],
}

export const initial = () => <Home />
