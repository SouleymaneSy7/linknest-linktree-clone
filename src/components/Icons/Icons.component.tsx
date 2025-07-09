import * as React from 'react'

type IconPropsType = {
  strokeWidth?: string
  stroke?: string
} & React.ComponentPropsWithoutRef<'svg'>

export const DiscordIcon: React.FC<IconPropsType> = ({
  strokeWidth = 2,
  stroke = '#000',
  ...delegatedProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 24 24"
      {...delegatedProps}
    >
      <path
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M18.894 4.344A17.409 17.409 0 0 0 14.532 3c-.192.33-.406.779-.555 1.13a16.677 16.677 0 0 0-4.833 0c-.15-.351-.373-.8-.555-1.13a17.162 17.162 0 0 0-4.363 1.344C1.463 8.419.716 12.397 1.09 16.323A17.782 17.782 0 0 0 6.435 19a13 13 0 0 0 1.14-1.845 11.182 11.182 0 0 1-1.802-.864c.15-.107.299-.224.438-.342 3.477 1.59 7.243 1.59 10.678 0 .15.118.288.235.437.342a11.18 11.18 0 0 1-1.802.864A13 13 0 0 0 16.665 19a17.684 17.684 0 0 0 5.345-2.677c.459-4.544-.726-8.491-3.116-11.979ZM8.056 13.901c-1.045 0-1.899-.949-1.899-2.112 0-1.162.832-2.112 1.899-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.843 2.112-1.9 2.112Zm7.009 0c-1.045 0-1.9-.949-1.9-2.112 0-1.162.833-2.112 1.9-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.832 2.112-1.899 2.112Z"
      />
    </svg>
  )
}

export const FrontendMentorIcon: React.FC<IconPropsType> = ({
  strokeWidth = 2,
  stroke = '#000',
  ...delegatedProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      {...delegatedProps}
    >
      <path
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M12.17 1.272a.732.732 0 0 0-.718.732v13.914a.732.732 0 0 0 .732.732.732.732 0 0 0 .732-.732V2.004a.732.732 0 0 0-.745-.732zM23.246 5.44a.734.734 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.813a.738.738 0 0 0 .3.065.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966.734.734 0 0 0-.69-.433zm-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.732.732 0 0 0-.694-.547z"
      />
    </svg>
  )
}

export const MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<?xml version="1.0" ?><svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M0 0h48v48H0z" fill="none"/></svg>`
)}`
