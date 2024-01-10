import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  favoriteNumber: number
}

const defaultOptions: Options = {
  favoriteNumber: 42,
}

export default ((userOpts?: Options) => {
  const opts = { ...userOpts, ...defaultOptions }
  function YourComponent(props: QuartzComponentProps) {
    // const [first, setfirst] = useState(second)
    if (opts.favoriteNumber < 0) {
      return null
    }

    return <p>My favourite number is {opts.favoriteNumber}</p>
  }

  return YourComponent
}) satisfies QuartzComponentConstructor