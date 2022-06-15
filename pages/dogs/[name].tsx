import { useRouter } from "next/router";
import { NextPage } from "next"
import { useDispatch, useSelector } from "react-redux";
import { fetchDogBreedImages, getAllDogBreedImages, getDogBreedImagesError, getDogBreedImagesStatus } from "../../store/dog-breed-images/dog-breed-images-slice";
import { useEffect } from "react";
import { store } from "../../store/store";
import { API_STATUS } from "../../store/common";

const Dog: NextPage = () => {
  const router = useRouter()
  const { name } = router.query
  const dispatch = useDispatch();
  const dogBreedImages = useSelector(getAllDogBreedImages)
  const dogBreedImagesStatus = useSelector(getDogBreedImagesStatus)
  const dogBreedImagesError = useSelector(getDogBreedImagesError) // possible future extension: could display something if there was an error

  useEffect(() => {
    if(!router.isReady) return;
    if (dogBreedImagesStatus == API_STATUS.IDLE) {
     store.dispatch(fetchDogBreedImages(`/breed/${name}/images`))
    }
  }, [router, dogBreedImagesStatus, dispatch])

  
  return <h1>{ dogBreedImagesStatus }</h1>
}

export default Dog
