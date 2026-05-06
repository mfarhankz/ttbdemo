import Script from 'next/script'
import React from 'react'

import { themeLocalStorageKey } from '../ThemeSelector/types'

export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    window.localStorage.setItem('${themeLocalStorageKey}', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  })();
  `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}
