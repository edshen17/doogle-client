import { NextPage } from "next"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllDogBreeds, getDogBreedsError, getDogBreedsStatus, fetchDogBreeds, API_STATUS } from "../store/dog-breeds/dog-breeds-slice"
import { store } from "../store/store";


const Dogs: NextPage = () => {
  const dispatch = useDispatch();
  const dogBreeds = useSelector(getAllDogBreeds)
  const dogBreedsStatus = useSelector(getDogBreedsStatus)
  const dogBreedsError = useSelector(getDogBreedsError)

  useEffect(() => {
    if (dogBreedsStatus == API_STATUS.IDLE) {
     store.dispatch(fetchDogBreeds())
    }
  }, [dogBreedsStatus, dispatch])

  console.log(dogBreeds)

  return <h1>sa</h1>
}

export default Dogs
