import { useRouter } from "next/router";
import { NextPage } from "next"
import { useDispatch, useSelector } from "react-redux";
import { fetchDogBreedImages, getAllDogBreedImages, getDogBreedImagesError, getDogBreedImagesStatus } from "../../store/dog-breed-images/dog-breed-images-slice";
import { useEffect } from "react";
import { store } from "../../store/store";
import { API_STATUS } from "../../store/common";
import Image from "next/image";

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

  const images = dogBreedImages.map((imgSrc: string, index: number) => {
    return <div className="w-full md:w-1/2 lg:w-4/12 p-4" key={index}>
      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-3 shadow-xl">
        <Image
          className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded"
          src={imgSrc}
          alt={`${name}-pic-${index}`}
          blurDataURL={imgSrc}
          placeholder="blur"
          layout="fill"
        />
      </div>
    </div>
  })

  return <div className="container px-5 py-8 lg:py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {images}
    </div>
  </div>
}

export default Dog
