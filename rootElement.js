import React from "react"
import ThemeProvider from "./src/utils/themeContext"

export default function RootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>
}
