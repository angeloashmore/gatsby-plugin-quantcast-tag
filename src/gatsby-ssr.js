import React from 'react'

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  { head },
) => {
  if (process.env.NODE_ENV !== 'production') return

  const setComponents = head ? setHeadComponents : setPostBodyComponents

  return setComponents([
    React.createElement('script', {
      key: 'gatsby-plugin-quantcast-tag',
      src: 'https://secure.quantserve.com/quant.js',
      async: 'true',
      type: 'text/javascript',
    }),
  ])
}
