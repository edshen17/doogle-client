import { useRouter } from "next/router";
import { NextPage } from "next"

const Dog: NextPage = () => {
  const router = useRouter()
  const { name } = router.query
  return <h1>{ name }</h1>
}

export default Dog
