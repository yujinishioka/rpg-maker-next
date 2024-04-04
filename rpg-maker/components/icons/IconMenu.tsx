import { SVGProps } from "react"

export default function IconMenu(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={24}
      viewBox="0 0 21 24"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0.75 5.25C0.328125 5.25 0 4.875 0 4.5C0 4.125 0.328125 3.75 0.75 3.75H20.25C20.625 3.75 21 4.17188 21 4.54688C21 4.92188 20.625 5.25 20.25 5.25H0.75ZM20.25 11.25C20.625 11.25 21 11.625 21 12C21 12.4219 20.625 12.75 20.25 12.75H0.75C0.328125 12.75 0 12.4219 0 12C0 11.625 0.328125 11.25 0.75 11.25H20.25ZM20.25 18.75C20.625 18.75 21 19.1719 21 19.5469C21 19.9219 20.625 20.25 20.25 20.25H0.75C0.328125 20.25 0 19.875 0 19.5C0 19.125 0.328125 18.75 0.75 18.75H20.25Z"
      />
    </svg>
  )
}